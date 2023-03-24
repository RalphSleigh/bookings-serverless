import { db, orm } from './orm.js';
import { backOff } from 'exponential-backoff';
import { Op } from 'sequelize';
import { clone } from 'lodash'

import path from 'path';
//import mailcomposer from "mailcomposer";

import MailComposer from 'nodemailer/lib/mail-composer'

import htmlToText from 'html-to-text';

import { auth, gmail } from '@googleapis/gmail'
import { serializeError } from 'serialize-error';
import { Lambda } from "aws-sdk"
import { cloneDeep } from 'sequelize/types/utils.js';

class realEmailSender {
    jwtClient: any;
    config: any;
    authPromise: any;

    constructor(config) {

        this.config = config
        this.jwtClient = new auth.JWT(
            config.EMAIL_CLIENT_EMAIL,
            '',
            config.EMAIL_PRIVATE_KEY,
            ['https://www.googleapis.com/auth/gmail.send'],
            config.EMAIL_FROM
        );

        this.authPromise = this.jwtClient.authorize();

    }

    async single(to, template, values) {
        try {
            console.log(`Emailing ${to} template ${template.name}`)

            await this.authPromise

            values.event.customQuestions.emailSubjectTag = values.event.customQuestions.emailSubjectTag || '';


            const subject = template.subject(values);
            const htmlEmail = template.html(values, this.config);
            const textEmail = htmlToText.fromString(htmlEmail);

            const mail_options = {
                from: "Woodcraft Folk Bookings <" + this.config.EMAIL_FROM + ">",
                sender: this.config.EMAIL_FROM,
                replyTo: values.event.customQuestions.emailReply ? values.event.customQuestions.emailReply : this.config.EMAIL_FROM,
                to: to,
                subject: subject,
                text: textEmail,
                html: htmlEmail
            }

            const message = await new MailComposer(mail_options).compile().build();
            const gmail_instance = gmail({ version: 'v1', auth: this.jwtClient });

            await backOff(() => {
                console.log("send attempt")
                return gmail_instance.users.messages.send(
                    {
                        auth: this.jwtClient,
                        userId: 'bookings-auto@woodcraft.org.uk',
                        media: {
                            body: message,
                            mimeType: "message/rfc822"
                        }
                    })
            }, { startingDelay: 2000 })
        }
        catch (e) {
            console.log("error in email single")
            console.log(serializeError(e))
        }
    }
    async toManagers(template, values) {

        console.log(`Emailing managers of ${values.event.name} template ${template.name}`)
        const db = await orm()

        const owner = await db.user.findOne({ where: { id: { [Op.eq]: values.event.userId } } });
        const managers = await db.role.findAll({
            //@ts-ignore
            where: {
                [Op.and]: {
                    eventId: { [Op.eq]: values.event.id },
                    name: { [Op.eq]: 'Manage' },
                    organisationId: { [Op.eq]: null },
                    villageId: { [Op.eq]: null }
                }
            },
            include: [{ model: db.user }]
        }); 

        values.emailUser = owner;
        
        await Promise.all([this.single(owner!.email, template, values), ...managers.map(m => {
            const new_values = clone(values)
            new_values.emailUser = m.user;
           return this.single(m.user!.email, template, new_values);
        })]);
    }
}

class nullEmailSender {

    constructor(config) {
    }

    async single(to, template, values) {
        console.log(`NOT Emailing ${to} template ${template.name}`)
    }

    async toManagers(template, values) {
        console.log(`NOT Emailing managers of ${values.event.name} template ${template.name}`)
    }
}

class LambdaEmailSender {
    config: any;

    constructor(config) {
        this.config = config
    }

    async single(to, template, values) {

        const lambda = new Lambda({})

        const data = {
            email: {
                to: to, name: template.name, values: values, type: 'single'
            }
        }

        console.log(`invoking email lambda for Emailing ${to} template ${template.name}`)

        await new Promise((resolve, reject) => {
            lambda.invoke({
                FunctionName: 'function_email',
                InvocationType: "Event",
                Payload: JSON.stringify(data)
            }, (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    async toManagers(template, values) {
        const lambda = new Lambda({})

        const data = {
            email: {
                name: template.name, values: values, type: 'manager'
            }
        }

        console.log(`invoking email lambda for Emailing managers of ${values.event.name} template ${template.name}`)

        await new Promise((resolve, reject) => {
            lambda.invoke({
                FunctionName: 'function_email',
                InvocationType: "Event",
                Payload: JSON.stringify(data)
            }, (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
}


export function get_email_client(config, wrapper = true) {
    if (wrapper && config.EMAIL) return new LambdaEmailSender(config)
    if (config.EMAIL) {
        return new realEmailSender(config);
    } else {
        return new nullEmailSender(config);
    }
}


