import { db, orm } from './orm.js';
import { backOff } from 'exponential-backoff';
import { Op } from 'sequelize';

import path from 'path';
import mailcomposer from "mailcomposer";
import htmlToText from 'html-to-text';

import { auth, gmail } from '@googleapis/gmail'
import { serializeError } from 'serialize-error';

class realEmailSender {
    jwtClient: any;
    config: any;

    constructor(config) {

        this.config = config
        this.jwtClient = new auth.JWT(
            config.EMAIL_CLIENT_EMAIL,
            '',
            config.EMAIL_PRIVATE_KEY,
            ['https://www.googleapis.com/auth/gmail.send'],
            config.EMAIL_FROM
        );

        this.jwtClient.authorize(function (err) {
            if (err) {
                console.log(err);
            }
        });

    }

    single(to, template, values) {
        console.log(`Emailing ${to} template ${template.name}`)

        values.event.customQuestions.emailSubjectTag = values.event.customQuestions.emailSubjectTag || '';


        const subject = template.subject(values);
        const htmlEmail = template.html(values, this.config);
        const textEmail = htmlToText.fromString(htmlEmail);

        const mail = mailcomposer({
            from: "Woodcraft Folk Bookings <" + this.config.emailFrom + ">",
            sender: this.config.emailFrom,
            replyTo: values.event.customQuestions.emailReply ? values.event.customQuestions.emailReply : this.config.emailFrom,
            to: to,
            subject: subject,
            text: textEmail,
            html: htmlEmail
        });

        mail.build((err, message) => {

            if (err) {
                console.log(err);
                return;
            }

            const gmail_instance = gmail({ version: 'v1', auth: this.jwtClient });

            backOff(() => gmail_instance.users.messages.send(
                {
                    auth: this.jwtClient,
                    userId: 'bookings-auto@woodcraft.org.uk',
                    media: {
                        body: message,
                        mimeType: "message/rfc822"
                    }
                }), { startingDelay: 2000 })
                .catch(e => console.log(serializeError(e)));
        })
    }

    async toManagers(template, values) {

        console.log(`Emailing managers of ${values.event.name} template ${template.name}`)
        const db = await orm()

        const owner = await db.user.findOne({ where: { id: { [Op.eq]: values.event.userId } } });

        const managers = await db.role.findAll({
            where: {
                [Op.and]: {
                    eventId: { [Op.eq]: values.event.id },
                    name: { [Op.eq]: 'Manage' },
                    organisationId: { [Op.eq]: undefined },
                    villageId: { [Op.eq]: undefined }
                }
            },
            include: [{ model: db.user }]
        });


        values.emailUser = owner;
        this.single(owner!.email, template, values);
        managers.forEach(m => {
            values.emailUser = m.user;
            this.single(m.user!.email, template, values);
        });
    }
}

class nullEmailSender {

    constructor(config) {
    }

    single(to, template, values) {
        console.log(`NOT Emailing ${to} template ${template.name}`)
    }

    toManagers(template, values) {
        console.log(`NOT Emailing managers of ${values.event.name} template ${template.name}`)
    }
}

export function get_email_client(config) {
    if (config.EMAIL) {
        return new realEmailSender(config);
    } else {
        return new nullEmailSender(config);
    }
}


