import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user, orm } from '../../../lambda-common'
import { edit_event } from '../../../lambda-common/permissions';
import { updateAssociation } from '../../../lambda-common/util';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([edit_event],
    async (lambda_event, db, config, current_user) => {
        console.log(`Edited event ${lambda_event.body.id}`);
        
        let event = await db.event.findOne({ where: { id: lambda_event.body.id } })
        if (event === null) throw new Error("Event not found")
        
        await event.update(lambda_event.body)

        event = await db.event.findOne({ where: { id: lambda_event.body.id }, include: [{ model: db.organisation }] })
        await updateAssociation(db, event, 'organisations', db.organisation, lambda_event.body.organisations)
       
        event = await db.event.findOne({ where: { id: lambda_event.body.id }, include: [{ model: db.organisation }] })
        return { events: [event] }
    })
