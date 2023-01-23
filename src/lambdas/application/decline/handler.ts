import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Op } from 'sequelize';
import { lambda_wrapper_json, user, orm } from '../../../lambda-common'
import { decide_application } from '../../../lambda-common/permissions';
import { get_user_from_event } from '../../../lambda-common/user';
import { get_email_client } from '../../../lambda-common/email';
import * as applicationReceived from '../../../lambda-common/emails/applicationReceived'
import * as managerApplicationReceived from '../../../lambda-common/emails/managerApplicationReceived'
import { getEventDetails } from '../../../lambda-common/util';
import { postToDiscord } from '../../../lambda-common/discord';
import { ApplicationModel } from '../../../lambda-common/models/application';

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
        const eventId = application?.eventId

        const user = await db.user.scope('withData').findOne({ where: { id: { [Op.eq]: application.userId } } })

        console.log(`User ${current_user.userName} Declining Application to event ${eventId}`);
        await application!.destroy();
        const event = await getEventDetails(db, eventId!)

        const app_string = event.applications.length == 0 ? 'No outstanding applications remaining' : event.applications.length == 1 ? '1 outstanding application remains' : `${event.applications.length} outstanding applications remain`

        await postToDiscord(config, `${current_user.userName} DECLINED application from ${user!.userName}. ${app_string}`)

        return { events: [event] }
    })

