import { APIGatewayProxyEvent } from 'aws-lambda'
import { Op } from 'sequelize'
import * as P from '../shared/permissions'
import { UserModel } from './models/user'
import { db } from './orm'

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
