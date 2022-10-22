import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_raw, user } from '../../../../lambda-common'
import { Op } from 'sequelize';
import { google } from 'googleapis'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

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

        const oauth2Client = new google.auth.OAuth2(
            config.GOOGLE_CLIENT_ID,
            config.GOOGLE_CLIENT_SECRET,
            `${config.BASE_URL}api/auth/google/callback`
        );

        console.log(JSON.stringify(event))

        if(!event.queryStringParameters?.code) throw new Error("well crap")

        // Save these somewhere safe so they can be used at a later time.
        const {tokens} = await oauth2Client.getToken(event.queryStringParameters.code)
        oauth2Client.setCredentials(tokens);
        google.options({auth: oauth2Client})
        
        const plus = google.plus('v1');

        const res = await plus.people.get({
            // The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
            userId: 'me',
        });
        
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
            const jwt_token = jwt.sign({id: user_instance.id}, config.JWT_SECRET, {expiresIn: 60*60})
            const cookie_string = cookie.serialize("jwt", jwt_token, {maxAge: 60 * 60, httpOnly: true, sameSite:true, path: '/'})

            return {
                statusCode: 301,
                headers: {
                    Location: `/`,
                    'Set-Cookie': cookie_string
                },
                body: ''
            }
        } catch(e) {
            if(e instanceof user.WrongProviderError) {
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
