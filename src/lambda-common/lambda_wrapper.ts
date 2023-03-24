import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { get_config } from './config';
import { flush_logs, log } from './logging';
import { UserModel } from './models/user';
import { orm, db } from './orm';
import { PermissionFuntion } from './permissions';
import SecretsManager from './secrets';
import { since, start } from './timer';
import { get_user_from_event } from './user';
import { is_warmer_event } from './warmer';
import { serializeError } from 'serialize-error';

export type LambdaJSONHandlerEvent = Pick<APIGatewayProxyEvent, Exclude<keyof APIGatewayProxyEvent, 'body'>> & { 
    body: any
}

export type LambdaJSONHandlerFunction = (lambda_event: LambdaJSONHandlerEvent, db: db, config: { [index: string]: any }, user: UserModel) => Promise<any>

export function lambda_wrapper_json(
    permissions: PermissionFuntion[],
    handler: LambdaJSONHandlerFunction):
    (event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult> {
    return async (lambda_event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
        start()
        //console.log("Entered handler code")
        try {
            since("getting both")
            const password = SecretsManager.getSecret("db_password_secret")
            const [config, db] = await Promise.all([get_config(),orm(password)])
            //const db_password = await SecretsManager.getSecret("db_password_secret")
            
            //const config = await get_config()
            //since("got config")
            //const [db_password, config] = await Promise.all([SecretsManager.getSecret("db_password_secret"), get_config()])
            //since("got config and password")    
            //const db = await orm(db_password)
            since("got db and config")    
 
            if(is_warmer_event(lambda_event)) {
                await password
                console.log("Evocation was a warmer event")
                //@ts-ignore
                return {}
            }
            const user = await get_user_from_event(lambda_event, db, config)
            since("got user")

            log(`User ${user.userName} calling ${lambda_event.httpMethod} ${lambda_event.path}`)
            
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
            since("done permissions")    
            const response = await handler(lambda_event, db, config, user)
            since("done handler")    
            return {
                statusCode: 200,
                body: JSON.stringify(response),
            }
        }
        catch (e) {
            console.log("General failure:")
            console.log(serializeError(e))
            log(`General failure in ${context.functionName }`)
            log(e)
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: e instanceof Error ? e.message : 'Something else',
                }),
            };
        }
        finally {
            await flush_logs()
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
    finally {
        await flush_logs()
    }
}