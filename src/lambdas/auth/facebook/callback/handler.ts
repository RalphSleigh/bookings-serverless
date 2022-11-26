import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_raw, log, user } from '../../../../lambda-common'
import { Op } from 'sequelize';
import { auth, plus } from '@googleapis/plus'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import fetch from 'node-fetch'
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

        console.log(event)

        const redirect_url = `${config.BASE_URL}api/auth/facebook/callback`

        const token_url = `https://graph.facebook.com/v15.0/oauth/access_token?client_id=${config.FACEBOOK_CLIENT_ID}&redirect_uri=${redirect_url}&client_secret=${config.FACEBOOK_CLIENT_SECRET}&code=${event.queryStringParameters?.code}`

        const token_response = await fetch(token_url)
        const token = await token_response.json()

        console.log(token)

        const profile_url = `https://graph.facebook.com/v15.0/me?fields=id,name,email&access_token=${token.access_token}`
        const profile_response = await fetch(profile_url)
        const profile = await profile_response.json()

        console.log(profile)

        try {
            const user_instance = await user.get_user_from_login(profile.id, profile.name, profile.email ? profile.email : "", "facebook")

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

            log(`User Login from facebook ${user_instance.userName} from ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

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

                log(`Wrong provider login from facebook expected ${e.original} from ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

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
