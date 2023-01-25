import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { get_config, lambda_wrapper_json, orm, user } from '../../../lambda-common'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { flush_logs, log } from '../../../lambda-common/logging';

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
        const config = await get_config()
        const db = await orm()

        delete event.headers["Cookie"]
        delete event.headers["cookie"]

        const current_user = await user.get_user_from_event(event, db, config)
        delete current_user.password

        const cookie_string = cookie.serialize("jwt", "", { maxAge: 60 * 60, httpOnly: true, sameSite: true, path: '/' })

        log(`User logged out ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

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
        log("General failure:")
        log(e)
        await flush_logs()
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: e instanceof Error ? e.message : 'Something else',
            }),
        };
    }
}
