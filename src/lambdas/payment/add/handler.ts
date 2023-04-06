import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { add_payment, add_village, book_event, book_into_organisation } from '../../../lambda-common/permissions';
import { BookingModel } from '../../../lambda-common/models/booking';
import feeFactory from '../../../shared/fee/feeFactory';
import { get_email_client } from '../../../lambda-common/email';
import * as confirmation from '../../../lambda-common/emails/confirmation'
import * as manager_booking_created from '../../../lambda-common/emails/managerBookingCreated'
import { getEventDetails } from '../../../lambda-common/util';
import { getBookingAndCombineScopes } from '../../../lambda-common/util';
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

export const lambdaHandler = lambda_wrapper_json([add_payment],
    async (lambda_event, db, config, current_user) => {

        await db.payment.create(lambda_event.body);

        const booking = await db.booking.findOne({
            where:   {id: {[Op.eq]: lambda_event.body.bookingId}},
            include: [{model: db.event}]
        }); //get the booking, but we can't send this as dangerous scope.
    
        const flat = await getBookingAndCombineScopes(db, current_user, booking)

        await postToDiscord(config, `${current_user.userName} added a${lambda_event.body.type === 'adjustment' ? 'n': ''} ${lambda_event.body.type} to booking ${booking!.district} of ${formatMoney(lambda_event.body.amount)} (${lambda_event.body.note})`)

        return {bookings: flat}
    })


function formatMoney(amount: number) {
    return amount > 0 ? `£${amount.toFixed(2)}` : `-£${(amount * -1).toFixed(2)}`
}    