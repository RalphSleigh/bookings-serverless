import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import  { orm } from './orm'
import { log } from './logging'
import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { get_config } from './config'
import { since } from './timer'
 
export async function get_user_from_event(event: APIGatewayProxyEvent, db, config): Promise<any> {
    try {
        //console.log(event)

        const cookie_string = event.headers["Cookie"] || event.headers["cookie"]

        if(!cookie_string) throw "no cookie"

        const jwt_string = cookie.parse(cookie_string)?.jwt
        const token = jwt.verify(jwt_string, config.JWT_SECRET) as {id: number}
        
        since("Before user DB call")
        const user = await db.user.scope('withData').findOne({where: {id: token.id}})
        since("After user DB call")
        if(!user) throw "no user found for ID???"

        return user.get({plain: true});

    } catch (e) {
        console.log(e)
        since("Before user DB call")
        //console.log(db.user)
        const user = await db.user.scope('withData').findOne({where: {userName: 'Guest'}})
        since("After user DB call")
        //@ts-ignore
        return user.get({plain: true});
    }
}

export async function get_user_from_login(id: string | undefined | null, displayName: string, email: string, source: string) {

    const db = await orm()

    if (typeof id !== 'string') throw new Error("No ID from provider");
    const combinedId = source + id;
    //first, try and find a user by their ID;
    let user = await db.user.scope('withData').findOne({where: {remoteId: combinedId}});
    if (user) {
        /*
        log.debug({
            message: "Found user based on id {user}",
            user: user.userName
        });
        */

        if(user.userName !== displayName) {
            user.userName = displayName
            await user.save()
        }

       log(`found user ${user.remoteId} ${user.userName}`)
       return user;
    }
    //Do we have a user with the right email but no remote id?
    if (typeof email === 'string') {

        user = await db.user.scope('withData').findOne({where: db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('email')), Op.like, '%' + email.toLowerCase() + '%')});
        
        if (user) {
            if (user.remoteId) throw new WrongProviderError(user.source, source);
            user.remoteId = combinedId;
            user.source = source;
            await user.save();
            log(`Found user based on e-mail, inserting remote id. ${user.userName}`)
            return user;
        }
    }

    user = await db.user.create({
        userName: displayName,
        email: email,
        source: source,
        remoteId: combinedId
    });
    log(`Creating new user ${user.userName}`)
    return await db.user.scope('withData').findOne({where: {id: user.id}});
};

export class WrongProviderError extends Error {
    original: string
    used: string
    constructor(originalProvidor: string, used: string) {
        super();
        this.original = originalProvidor;
        this.used = used;
    }
}
