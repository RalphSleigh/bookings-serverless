import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { get_booking, get_event_bookings } from '../../../lambda-common/permissions';
import { getBookingsAndCombineScopes } from '../../../lambda-common/util';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([get_event_bookings],
    async (lambda_event, db, config, current_user) => {
        const event = await db.event.findOne({where: {id: {[Op.eq]: lambda_event.pathParameters?.id}}});
        const flat = await getBookingsAndCombineScopes(db, current_user, event)
        return {bookings: flat}
    })