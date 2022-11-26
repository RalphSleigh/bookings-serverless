import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Op } from 'sequelize';
import { lambda_wrapper_json, user, orm } from '../../../lambda-common'
import { get_event_bookings, get_user_list } from '../../../lambda-common/permissions';
import { getEventDetails } from '../../../lambda-common/util';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([get_user_list],
    async (lambda_event, db, config, current_user) => {
        const users = await db.user.findAll({where: {id: {[Op.not]: 1}}});
        return { users: users };
    }
)
