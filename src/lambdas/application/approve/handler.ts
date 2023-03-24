import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Op } from 'sequelize';
import { lambda_wrapper_json, user, orm } from '../../../lambda-common'
import { decide_application } from '../../../lambda-common/permissions';
import { get_user_from_event } from '../../../lambda-common/user';
import { get_email_client } from '../../../lambda-common/email';
import * as applicationApproved from '../../../lambda-common/emails/applicationApproved'
import { getEventDetails } from '../../../lambda-common/util';
import { ApplicationModel } from '../../../lambda-common/models/application';
import { postToDiscord } from '../../../lambda-common/discord';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([decide_application],
    async (lambda_event, db, config, current_user) => {

        const application = await db.application.findOne({ where: { id: { [Op.eq]: lambda_event.body.id } } }) as ApplicationModel

        console.log(`User ${current_user.userName} Approving User ${application.user!.userName} to book for event ${application.event!.name}`)

        await db.role.create({
            name: "book",
            userId: application.userId,
            eventId: application.event!.id,
            organisationId: lambda_event.body.org,
            note: lambda_event.body.note
        });

        const user = await db.user.scope('withData').findOne({ where: { id: { [Op.eq]: application.userId } } })
        await application.destroy();
        const event = await getEventDetails(db, application.eventId)

        const applications = await db.application.findAll() as ApplicationModel[]

        const app_string = event.applications.length == 0 ? 'No outstanding applications remaining' : event.applications.length == 1 ? '1 outstanding application remains' : `${event.applications.length} outstanding applications remain`

        await postToDiscord(config, `${current_user.userName} approved application from ${user!.userName}. ${app_string}`)

        const email = get_email_client(config)
        const values = { event: event, user: user };
        await email.single(user!.email, applicationApproved, values);

        return { events: [event] }
    })

