import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { create_role, create_role_user_has_2fa } from '../../../lambda-common/permissions';
import { BookingModel } from '../../../lambda-common/models/booking';
import feeFactory from '../../../shared/fee/feeFactory';
import { get_email_client } from '../../../lambda-common/email';
import * as confirmation from '../../../lambda-common/emails/confirmation'
import * as manager_booking_created from '../../../lambda-common/emails/managerBookingCreated'
import { getEventDetails } from '../../../lambda-common/util';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([create_role, create_role_user_has_2fa],
    async (lambda_event, db, config, current_user) => {
        console.log(`Creating role ${lambda_event.body.name} for user ${lambda_event.body.userId} event ${lambda_event.body.eventId} village ${lambda_event.body.villageId} organisation ${lambda_event.body.organisationId}`)

        await db.role.create(lambda_event.body);
        const event = await getEventDetails(db, lambda_event.body.eventId)

        return { events: [event] }
    })