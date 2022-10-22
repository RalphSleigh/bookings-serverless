import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ConcatenationScope, ContextExclusionPlugin } from 'webpack';
import { lambda_wrapper_json, user, orm } from '../../../lambda-common'
import { create_event } from '../../../lambda-common/permissions';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([create_event],
    async (lambda_event, db, config, current_user) => {
        console.log(`Deleting event ${lambda_event.body.id}`);

        lambda_event.body.userId = current_user.id;
        const event = await db.event.findOne({where: {id: lambda_event.body.id}})
        await event?.destroy()
        return {}
    })
