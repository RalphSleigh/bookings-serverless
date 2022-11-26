import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { get_config, lambda_wrapper_json, log, orm, user } from '../../../lambda-common'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { warm_frontend } from '../../../lambda-common/warmer';
import { flush_logs } from '../../../lambda-common/logging';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {

        const promises = warm_frontend()

        const config = await get_config()
        const db = await orm()

        const current_user = await user.get_user_from_event(event, db, config)
        delete current_user.password
        console.log(event)
        log(`User request, current user is ${current_user.userName} (${current_user.email})`)

        if (current_user.id == 1) {
            await promises
            await flush_logs()
            return {
                statusCode: 200,
                body: JSON.stringify(current_user),
            }
        }

        const jwt_token = jwt.sign({ id: current_user.id }, config.JWT_SECRET, { expiresIn: 60 * 60 })
        const cookie_string = cookie.serialize("jwt", jwt_token, { maxAge: 60 * 60, httpOnly: true, sameSite: true, path: '/' })

        await promises
        await flush_logs()

        return {
            statusCode: 200,
            headers: {
                'Set-Cookie': cookie_string
            },
            body: JSON.stringify(current_user),
        }
    }
    catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: e instanceof Error ? e.message : 'Something else',
            }),
        };
    }
}
