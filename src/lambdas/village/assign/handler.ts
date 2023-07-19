import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { assign_village } from '../../../lambda-common/permissions';
import { BookingModel } from '../../../lambda-common/models/booking';
import feeFactory from '../../../shared/fee/feeFactory';
import { get_email_client } from '../../../lambda-common/email';
import * as confirmation from '../../../lambda-common/emails/confirmation'
import * as manager_booking_created from '../../../lambda-common/emails/managerBookingCreated'
import { getEventDetails } from '../../../lambda-common/util';
import { postToDiscord } from '../../../lambda-common/discord';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([assign_village],
    async (lambda_event, db, config, current_user) => {
        const booking = await db.booking.findOne({where: {id: lambda_event.body.bookingId}, include: [{model: db.participant}, {model: db.village}]});

        const currentVillageName = booking?.village?.name

        booking!.villageId = lambda_event.body.villageId;

        await booking!.save();

        const newBooking = await db.booking.findOne({where: {id: lambda_event.body.bookingId}, include: [{model: db.participant}, {model: db.village}]});

        const newVillageName = newBooking?.village?.name

        const bookingName = booking?.participants?.length === 1 ? booking?.participants[0].name : booking?.district

        await postToDiscord(config, `${current_user.userName} moved booking ${bookingName} from ${currentVillageName || 'unassigned'} to ${newVillageName || 'unassigned'}`)

        return { bookings: [booking]}
    })