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

        application.message = lambda_event.body.note

        await application.save()

        try {
            const user = await db.user.scope('withData').findOne({ where: { id: { [Op.eq]: application.userId } } })
            const bitOfMessage = application.message.split("\n")[0]
            await postToDiscord(config, `${current_user.userName} updated the application from ${user!.userName}: ${bitOfMessage}`)
        } catch(e) {
            //meh
        }
        const event = await getEventDetails(db, application.eventId)
        return { events: [event] }
    })

