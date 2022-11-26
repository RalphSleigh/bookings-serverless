import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { delete_role } from '../../../lambda-common/permissions';
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

export const lambdaHandler = lambda_wrapper_json([delete_role],
    async (lambda_event, db, config, current_user) => {
        const role = await db.role.findOne({ where: { id: { [Op.eq]: lambda_event.body.id } } });

        console.log(`Deleting role ${role!.id}`);

        await role!.destroy();

        const event = await getEventDetails(db, role!.eventId!)
        return { events: [event] }
    })