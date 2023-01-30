import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambda_wrapper_json, user } from '../../../lambda-common'
import { Op } from 'sequelize';
import { delete_booking } from '../../../lambda-common/permissions';
import { get_email_client } from '../../../lambda-common/email';
import * as managerBookingDeleted from '../../../lambda-common/emails/managerBookingDeleted'

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = lambda_wrapper_json([delete_booking],
    async (lambda_event, db, config, current_user) => {

        const booking = await db.booking.findOne({where: {id: lambda_event.body.id},include: [{model:db.event}, {model: db.participant}]})

        const email = get_email_client(config)

        const emailData: any = booking!.get({plain: true});
        emailData.user = current_user;
        //email.single(booking.userEmail, 'updated', emailData);
        await email.toManagers(managerBookingDeleted, emailData);
        await booking!.destroy()
        const bookings = await db.booking.findAll({
            where:
            {
                [Op.and]://@ts-ignore
                    [{ userId: { [Op.eq]: current_user.id } },
                    { userId: { [Op.not]: 1 } }
                    ]
            }, include: [{ model: db.participant }, { model: db.payment }]
        })
        return { bookings }
    });

