import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import path from 'path'
import { Umzug, SequelizeStorage } from 'umzug'
import { orm } from '../../lambda-common'
import bcrypt from 'bcryptjs'

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
    let response: APIGatewayProxyResult;
    try {

        const db = await orm()
//@ts-ignore
        await db.user.create({
            userName: 'Guest',
            password: '',
            email: ''
        })
//@ts-ignore
        const user = await db.user.create({
            userName: 'Ralph',
            password: bcrypt.hashSync('Hello', bcrypt.genSaltSync()),
            email: 'ralph.sleigh@woodcraft.org.uk'
        })
        //@ts-ignore
        await db.role.create({ name: "admin", userId: user.id })

        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'inited',
            }),
        };

    } catch (err: unknown) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: err instanceof Error ? err.message : 'some error happened',
            }),
        };
    }

    return response;
};