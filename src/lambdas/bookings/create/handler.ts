import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { book_event, book_into_organisation } from '../../../lambda-common/permissions';
import { BookingModel } from '../../../lambda-common/models/booking';
import feeFactory from '../../../shared/fee/feeFactory';
import { get_email_client } from '../../../lambda-common/email';
import * as confirmation from '../../../lambda-common/emails/confirmation'
import * as manager_booking_created from '../../../lambda-common/emails/managerBookingCreated'
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

export const lambdaHandler = lambda_wrapper_json([book_event, book_into_organisation],
    async (lambda_event, db, config, current_user) => {
        console.log("Booing create call happened creating")
        let newBooking = lambda_event.body as any;
        newBooking.guestUUID = ""
        newBooking.userId = newBooking.userId || current_user.id;
        newBooking.maxParticipants = newBooking.participants.length;
        newBooking.participants.forEach(p => {
            delete p.internalExtra
        });

        let booking = await db.booking.create(newBooking, {
            include: [{
                association: 'participants'
            }]
        })

        booking = await db.booking.findOne({ where: { id: booking.id }, include: [{ model: db.participant }, { model: db.event }] }) as BookingModel

        console.log(`Created new booking id ${booking.id} for ${booking.userName}`);

        const email = get_email_client(config)
        const fees = feeFactory(booking.event);

        await postToDiscord(config, `${current_user.userName} (${booking.district}) created a booking for event ${booking.event!.name}, they have booked ${booking.participants!.length} people`)

        const emailData: any = booking.get({ plain: true });
        emailData.editURL = config.BASE_URL + "/event/" + emailData.eventId + "/book";
        emailData.user = current_user;
        await email.single(booking.userEmail, confirmation, emailData);
        await email.toManagers(manager_booking_created, emailData);

        return { bookings: [booking] }
    })