import { APIGatewayProxyEvent } from 'aws-lambda'
import { Op } from 'sequelize'
import * as P from '../shared/permissions'
import { EventModel } from './models/event'
import { UserModel } from './models/user'
import { db } from './orm'
import { auth, admin } from '@googleapis/admin'
import { get_config } from './config'
import e from 'express'

export type PermissionFuntion = (lambda_event: PermissionEvent, user: UserModel, db: db) => void

export type PermissionEvent = Pick<APIGatewayProxyEvent, Exclude<keyof APIGatewayProxyEvent, 'body'>> & { 
    body: any
}

export async function get_booking(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const booking = await db.booking.findOne({where: {id: lambda_event.pathParameters?.id}, include: [{model: db.event}]})
    
    if(!P.viewBooking(user, booking)) throw new Error("P.viewBooking failed")
}

export async function book_event(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: lambda_event.pathParameters?.id}})
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: lambda_event.body.id}}})
    const organisation = await db.organisation.findOne({where: {id: {[Op.eq]: lambda_event.body.organisationId}}})

    if(!P.bookEvent(user, event)) throw new Error("P.bookEvent failed")
}

export async function book_into_organisation(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: lambda_event.body.eventId}})

    if (event?.organisationsEnabled === false) return;

    const booking = await db.booking.findOne({where: {id: {[Op.eq]: lambda_event.body.id}}})
    const organisation = await db.organisation.findOne({where: {id: {[Op.eq]: lambda_event.body.organisationId}}})

    if(!P.bookIntoOrganisation(user, event, booking, organisation)) throw new Error("P.bookIntoOrganisation failed")
}

export async function edit_booking(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: lambda_event.body.eventId}})
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: lambda_event.body.id}}})

    if(!P.editBooking(user, event, booking)) throw new Error("P.editBooking failed")
}

export async function delete_booking(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const booking = await db.booking.findOne({where: {id: {[Op.eq]: lambda_event.body.id}}})
    const event = await db.event.findOne({where: {id: {[Op.eq]: booking!.eventId}}});

    if(!P.deleteBooking(user, event, booking)) throw new Error("P.deleteBooking failed")
}


export async function create_event(lambda_event: PermissionEvent, user: UserModel, db: db) {
    if(!P.createEvent(user)) throw new Error("P.createEvent failed")
}

export async function edit_event(lambda_event: PermissionEvent, user: UserModel, db: db) {
    if(!P.editEvent(user, lambda_event.body)) throw new Error("P.editEvent failed")
}

export async function get_event_bookings(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: lambda_event.pathParameters?.id}})
    if(!P.manageEvent(user, event)) throw new Error("P.manageEvent failed")
}

export async function get_user_list(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: lambda_event.pathParameters?.id}})
    if(!P.getUserList(user, event)) throw new Error("P.getUserList failed")
}

export async function add_village(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: lambda_event.body.eventId}})
    if(!P.addVillage(user, event)) throw new Error("P.addVillage failed")
}

export async function delete_village(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: lambda_event.body.id}})
    if(!P.addVillage(user, event)) throw new Error("P.addVillage failed")
}

export async function assign_village(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const booking = await db.booking.findOne({
        where: {id: {[Op.eq]: lambda_event.body.bookingId}},
        include: [{model: db.event}]
    });
    if(!P.assignVillage(user, booking!.event)) throw new Error("P.assignVillage failed")
}

export async function apply_to_event(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: lambda_event.body.eventId}})
    if(!P.applyToBookEvent(user, event)) throw new Error("P.applyToBookEvent failed")
}

export async function decide_application(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const application = await db.application.findOne({where: {id: {[Op.eq]: lambda_event.body.id}}})
    if(!P.decideApplication(user, application!.event)) throw new Error("P.decideApplication failed")
}

export async function create_role(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: {[Op.eq]: lambda_event.body.eventId}}});
    if(!P.createRole(user, event)) throw new Error("P.createRole failed")
}

export async function create_role_user_has_2fa(lambda_event: PermissionEvent, user: UserModel, db: db) {
    const event = await db.event.findOne({where: {id: {[Op.eq]: lambda_event.body.eventId}}}) as EventModel
    if(event.bigCampMode == false) return true
    if(lambda_event.body.villageId && (lambda_event.body.name === "View" || lambda_event.body.name === "Kp")) return true
    if(lambda_event.body.name === "book") return true

    const role_user = await db.user.findOne({where: {id: {[Op.eq]: lambda_event.body.userId}}})
    const config = await get_config()

    const auth_client = new auth.JWT(
        config.EMAIL_CLIENT_EMAIL,
        '',
        config.EMAIL_PRIVATE_KEY,
        ['https://www.googleapis.com/auth/admin.directory.user.readonly'],
        config.EMAIL_FROM
    );        

    const directory = admin({version: 'directory_v1', auth: auth_client})
    const list = await directory.users.list({
        customer: 'my_customer',
        //domain: 'woodcraft.org.uk'
        //customer: 'C01qg2xou'
        query: `email='${role_user?.email}'`
    })

    try {
        if(list.data.users![0].isEnrolledIn2Sv === true) return true
    } catch (e) {
        throw new Error("User is not a woodcraft gsuite account")
    }
    throw new Error("User does not have 2FA enabled on account")
}

export async function delete_role(lambda_event: PermissionEvent, user: UserModel, db: db) {

    const role = await db.role.findOne({ where: { id: { [Op.eq]: lambda_event.body.id } }, include: [{model: db.event}] })

    if(!P.createRole(user, role!.event)) throw new Error("P.createRole failed")
}

export async function add_payment(lambda_event: PermissionEvent, user: UserModel, db: db) {

    let booking

    if(lambda_event.body.bookingId) {
        booking = await db.booking.findOne({where: {id: {[Op.eq]: lambda_event.body.bookingId}}, include: [{model: db.event}]})
    } else {
        const payment = await db.payment.findOne({
            where: {id: {[Op.eq]: lambda_event.body.id}},
            include: [{model: db.booking}]
        });

        booking = await db.booking.findOne({where: {id: {[Op.eq]: payment!.bookingId}}, include: [{model: db.event}]})
    }

    if(!P.addPayment(user, booking)) throw new Error("P.addPayment failed")
}

export async function update_membership(lambda_event: PermissionEvent, user: UserModel, db: db) {

    const participant = (await db.participant.findOne({where: {id: {[Op.eq]: lambda_event.body.id}}}))!
    const booking = (await db.booking.findOne({where: {id: {[Op.eq]: participant.bookingId}}}))!
    const event = await db.event.findOne({where: {id: {[Op.eq]: booking.eventId}}});

    if(!P.createRole(user, event)) throw new Error("P.createRole failed")
}

