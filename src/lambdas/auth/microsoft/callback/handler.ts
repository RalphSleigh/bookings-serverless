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

        console.log(event)

        const params = new URLSearchParams();
        params.append('client_id', config.MICROSOFT_CLIENT_ID);
        params.append('client_secret', config.MICROSOFT_CLIENT_SECRET);
        params.append('scope', 'openid email profile');
        params.append('grant_type', 'authorization_code');
        params.append('redirect_uri', `${config.BASE_URL}api/auth/microsoft/callback`);
        params.append('code', event.queryStringParameters?.code!);

        const token_response = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {method: 'POST', body: params});
        const token = await token_response.json();
        
        console.log(token_response)
        console.log(token)

        const profile_headers = new Headers()
        profile_headers.set('Authorization', `Bearer ${token.access_token}`)

        const profile_response = await fetch(`https://graph.microsoft.com/oidc/userinfo`, { headers: profile_headers})
        const profile = await profile_response.json()


        console.log(profile_response)
        console.log(profile)

        try {
            const name = (profile => {
                if(profile.name) return profile.name
                if(profile.givenname && profile.familyname) return `${profile.givenname} ${profile.familyname}`
                if(profile.given_name && profile.family_name) return `${profile.given_name} ${profile.family_name}`
                if(profile.givenname) return `${profile.givenname}`
                if(profile.given_name) return `${profile.given_name}`
                return ''
            })(profile)
            
            const user_instance = await user.get_user_from_login(profile.sub, name, profile.email ? profile.email : "", "microsoft")

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

            log(`User Login from microsoft ${user_instance.userName} from ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

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

                log(`Wrong provider login from microsoft expected ${e.original} from ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

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
