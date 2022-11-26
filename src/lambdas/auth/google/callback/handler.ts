import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_raw, log, user } from '../../../../lambda-common'
import { Op } from 'sequelize';
import { auth, plus } from '@googleapis/plus'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
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

        const oauth2Client = new auth.OAuth2(
            config.GOOGLE_CLIENT_ID,
            config.GOOGLE_CLIENT_SECRET,
            `${config.BASE_URL}api/auth/google/callback`
        );

        console.log(JSON.stringify(event))

        if (!event.queryStringParameters?.code) throw new Error("well crap")

        // Save these somewhere safe so they can be used at a later time.
        const { tokens } = await oauth2Client.getToken(event.queryStringParameters.code)
        oauth2Client.setCredentials(tokens);

        const plus_instance = plus({ version: 'v1', auth: oauth2Client });

        const res = await plus_instance.people.get({
            // The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
            userId: 'me'});

        try {
            const user_instance = await user.get_user_from_login(res.data.id, res.data.displayName ?? "default", res.data.emails?.[0].value ?? "default", "google")

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

            log(`User Login from google ${user_instance.userName} from ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

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

                log(`Wrong provider login from google expected ${e.original} from ${event.headers['X-Forwarded-For']} using ${event.headers['User-Agent']}`)

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
