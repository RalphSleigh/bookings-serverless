import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { add_payment, delete_booking } from '../../../lambda-common/permissions';
import { getBookingAndCombineScopes } from '../../../lambda-common/util';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([add_payment],
    async (lambda_event, db, config, current_user) => {

        const booking = await db.booking.findOne({where: {id: lambda_event.body.bookingId},include: [{model:db.event}, {model: db.participant}]}) //get the booking, but we can't send this as dangerous scope.
        if(booking === null) return

        booking.maxParticipants = booking.participants!.length;

        await booking.save()

        const bookings = await getBookingAndCombineScopes(db, current_user, booking)
        return {bookings: bookings}

    });

