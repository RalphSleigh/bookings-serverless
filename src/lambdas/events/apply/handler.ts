import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Op } from 'sequelize';
import { lambda_wrapper_json, user, orm } from '../../../lambda-common'
import { apply_to_event } from '../../../lambda-common/permissions';
import { get_user_from_event } from '../../../lambda-common/user';
import { get_email_client } from '../../../lambda-common/email';
import * as applicationReceived from '../../../lambda-common/emails/applicationReceived'
import * as managerApplicationReceived from '../../../lambda-common/emails/managerApplicationReceived'
import { clone } from 'lodash'

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

export const lambdaHandler = lambda_wrapper_json([apply_to_event],
    async (lambda_event, db, config, current_user) => {
    lambda_event.body.userId = current_user.id;
    const application = await db.application.create(lambda_event.body)
    const user = await get_user_from_event(lambda_event, db, config)
    const event = await db.event.findOne({where: {id: {[Op.eq]: lambda_event.body.eventId}}})

    const email = get_email_client(config)
    const emailData: any = event!.get({plain: true});
    //oh god
    emailData.user = current_user;
    emailData.event = clone(event!.get({plain: true}))
    emailData.event.user = current_user
    await email.single(current_user.email, applicationReceived, emailData);
    await email.toManagers(managerApplicationReceived, emailData);

    await postToDiscord(config, `Application reveived from ${user.userName} (${user.email})`)

    return user
    })
