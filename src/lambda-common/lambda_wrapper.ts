import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { get_config } from './config';
import { UserModel } from './models/user';
import { orm, db } from './orm';
import { PermissionFuntion } from './permissions';
import { get_user_from_event } from './user';

export type LambdaJSONHandlerEvent = Pick<APIGatewayProxyEvent, Exclude<keyof APIGatewayProxyEvent, 'body'>> & { 
    body: any
}

export type LambdaJSONHandlerFunction = (lambda_event: LambdaJSONHandlerEvent, db: db, config: { [index: string]: any }, user: UserModel) => Promise<any>

export function lambda_wrapper_json(
    permissions: PermissionFuntion[],
    handler: LambdaJSONHandlerFunction):
    (event: APIGatewayProxyEvent) => Promise<APIGatewayProxyResult> {
    return async (lambda_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
        console.log("Wrapper creating")
        try {
            const config = await get_config()
            const db = await orm()
            const user = await get_user_from_event(lambda_event)

            if (lambda_event.body) lambda_event.body = JSON.parse(lambda_event.body)

            try {
                for (const p of permissions) await p(lambda_event, user, db)
            } catch (e) {
                console.log("Permission failure:")
                console.log(e)
                return {
                    statusCode: 401,
                    body: JSON.stringify({
                        message: e instanceof Error ? e.message : 'Permission error',
                    }),
                };
            }
            const response = await handler(lambda_event, db, config, user)
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            }
        }
        catch (e) {
            console.log("General failure:")
            console.log(e)
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: e instanceof Error ? e.message : 'Something else',
                }),
            };
        }
    }
}

export async function lambda_wrapper_raw(handler: (db: db, config: { [index: string]: any }) => Promise<APIGatewayProxyResult>): Promise<APIGatewayProxyResult> {
    try {
        const config = await get_config()
        const db = await orm()

        return await handler(db, config)
    }
    catch (e) {
        console.log(e)
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: e instanceof Error ? e.message : 'Something else',
            }),
        };
    }
}