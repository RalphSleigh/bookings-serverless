import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_raw, log, user } from '../../../../lambda-common'
import { Op } from 'sequelize';
import { auth, plus } from '@googleapis/plus'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import fetch, { Headers } from 'node-fetch'
import { is_warmer_event } from '../../../../lambda-common/warmer';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {//@ts-ignore
    return lambda_wrapper_raw(async (db, config) => {

        if(is_warmer_event(event)) return {}

        const params = new URLSearchParams();
        params.append('client_id', config.YAHOO_CLIENT_ID);
        params.append('grant_type', 'authorization_code');
        params.append('redirect_uri', 'oob');
        params.append('code', event.queryStringParameters?.code!);

        const token_headers = new Headers()

        token_headers.set('Authorization', 'Basic ' + Buffer.from(`${config.YAHOO_CLIENT_ID}:${config.YAHOO_CLIENT_SECRET}`).toString('base64'))

        const token_response = await fetch("https://api.login.yahoo.com/oauth2/get_token", {method: 'POST', body: params, headers: token_headers});
        const token = await token_response.json();


        const profile_headers = new Headers()
        profile_headers.set('Authorization', `Bearer ${token.access_token}`)

        const profile_response = await fetch(`https://api.login.yahoo.com/openid/v1/userinfo`, {headers: profile_headers})
        const profile = await profile_response.json()

        try {
            const user_instance = await user.get_user_from_login(profile.sub, profile.name, profile.email ? profile.email : "", "yahoo")

            if (!user_instance) {
                return {
                    statusCode: 301,
                    headers: {
                        Location: `/login`,
                    },
                    body: ''
                }
            }
            //@ts-ignore
            const jwt_token = jwt.sign({ id: user_instance.id }, config.JWT_SECRET, { expiresIn: 60 * 60 })
            const cookie_string = cookie.serialize("jwt", jwt_token, { maxAge: 60 * 60, httpOnly: true, sameSite: true, path: '/' })

            log(`User Login from yahoo ${user_instance.userName} from ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

            return {
                statusCode: 301,
                headers: {
                    Location: `/`,
                    'Set-Cookie': cookie_string
                },
                body: ''
            }
        } catch (e) {
            if (e instanceof user.WrongProviderError) {

                log(`Wrong provider login from yahoo expected ${e.original} from ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

                return {
                    statusCode: 301,
                    headers: {
                        Location: `/user/${e.original}`,
                    },
                    body: ''
                }
            } else {
                throw e
            }
        }
    })

}
