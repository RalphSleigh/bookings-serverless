import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import path from 'path'
import { Umzug, SequelizeStorage } from 'umzug'
import { orm, am_in_lambda } from '../../lambda-common'

//@ts-ignore
import migrations from '../../lambda-common/migrations/*'

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

        console.log("getting ORM");

        const db = await orm();

        console.log("got ORM, migrating");

        //const migrations = am_in_lambda()? '/opt/nodejs/node_modules/common/migrations/*.js': './dist/common/migrations/*.js'
        ((m: any) => {
            console.log(m)
        })(migrations)

        const umzug = new Umzug({
            migrations: migrations,
            //@ts-ignore
            context: db.sequelize.getQueryInterface(),
            //@ts-ignore
            storage: new SequelizeStorage({ sequelize: db.sequelize }),
            logger: console,
        });


        // Checks migrations and run them if they are not already applied. To keep
        // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
        // will be automatically created (if it doesn't exist already) and parsed.
        await umzug.up();
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'migrated',
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