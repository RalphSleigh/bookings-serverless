import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { book_into_organisation, edit_booking } from '../../../lambda-common/permissions';
import moment from 'moment';

import { updateAssociation } from '../../../lambda-common/util'
import { BookingModel } from '../../../lambda-common/models/booking';
import feeFactory from '../../../shared/fee/feeFactory';
import { get_email_client } from '../../../lambda-common/email';
import { postToDiscord } from '../../../lambda-common/discord';

import * as updated from '../../../lambda-common/emails/updated'
import * as managerBookingUpdated from '../../../lambda-common/emails/managerBookingUpdated'
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([edit_booking, book_into_organisation],
    async (lambda_event, db, config, current_user) => {

        delete lambda_event.body.internalExtra; //delete the internal extra so user can't update.
        delete lambda_event.body.payments
        lambda_event.body.participants.forEach(p => {
            delete p.internalExtra
        });

        let booking = await db.booking.findOne({ where: { id: lambda_event.body.id }, include: [{ model: db.event }] }) as BookingModel

        if (!booking) throw new Error("booking not found")

        if (moment().isBefore(booking.event!.bookingDeadline)) {
            lambda_event.body.maxParticipants = lambda_event.body.participants.length
        } else {
            lambda_event.body.maxParticipants = Math.max(booking.maxParticipants || 0, lambda_event.body.participants.length);
        }
        await booking.update(lambda_event.body)//this ignores partitipants!
        booking = await db.booking.findOne({ where: { id: booking.id }, include: [{ model: db.participant }] }) as BookingModel

        const previous_participant_count = booking.participants?.length

        await updateAssociation(db, booking, 'participants', db.participant, lambda_event.body.participants)
        booking = await db.booking.findOne({ where: { id: lambda_event.body.id }, include: [{ model: db.participant }, { model: db.payment }, { model: db.event }] }) as BookingModel
        console.log(`User ${current_user.userName} Editing Booking id ${booking!.id}`);

        

        if (current_user.id === booking.userId) {
            const email = get_email_client(config)
            const fees = feeFactory(booking.event);
            const emailData = booking.get({ plain: true });
            //@ts-ignore
            emailData.editURL = config.BASE_URL + '/' + (emailData.userId === 1 ? "guestUUID/" + emailData.eventId + "/" + emailData.guestUUID : "event/" + emailData.eventId + "/book");
            emailData.user = current_user;
            await email.single(booking.userEmail, updated, emailData);
            await email.toManagers(managerBookingUpdated, emailData);

            await postToDiscord(config, `${current_user.userName} (${booking.district}) edited their booking for event ${booking.event!.name}, they have booked ${booking.participants!.length} people (previously ${previous_participant_count})`)
        }

        return { bookings: [booking] }
    })
