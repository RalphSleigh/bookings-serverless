import { Sequelize, Op, DataTypes, ModelStatic, Model } from "sequelize";
import SecretsManager from './secrets'
import am_in_lambda from './am_in_lambda'

import * as application from "./models/application";
import * as booking from "./models/booking";
import * as event from "./models/event";
import * as organisation from "./models/organisation";
import * as participant from "./models/participant";
import * as payment from "./models/payments";
import * as role from "./models/role"
import * as user from "./models/user"
import * as village from "./models/village"
import mariadb from "mariadb"
import { since } from "./timer";

//const models = [applications, booking, event, organisation, participant, payments, role, user, village]

export type db = {
    Sequelize: typeof Sequelize
    sequelize: Sequelize
    application: ModelStatic<application.ApplicationModel>
    booking: ModelStatic<booking.BookingModel>
    event: ModelStatic<event.EventModel>
    organisation: ModelStatic<organisation.OrganisationModel>
    participant: ModelStatic<participant.ParticipantModel>
    payment: ModelStatic<payment.PaymentModel>
    role: ModelStatic<role.RoleModel>
    user: ModelStatic<user.UserModel>
    village: ModelStatic<village.VillageModel>
}

export const orm = async (password: Promise<any> | null = null): Promise<db> => {
    //cache this in the global scope to reuse between lambdas
    //@ts-ignore
    if (global.orm) return global.orm

    //console.log("making db")

    if(!password) password = SecretsManager.getSecret("db_password_secret")

    let db_string
    if (am_in_lambda()) {
        db_string = `mariadb://root:BLANK@${process.env.database_url}/bookings`
    } else {
        db_string = 'mariadb://root:my-secret-pw@localhost/bookings'
    }

    const sequelize = new Sequelize(db_string, {
        //operatorsAliases: Op.Aliases,
        logging: false,
        dialectModule: mariadb,
        pool: {
            max: 2,
            min: 0,
            idle: 0,
            acquire: 10000,
            evict: 60000
        },
        hooks: {
            beforeConnect: async (config) => {
                console.log("resolving password")
                const db_password = await password
                const parsed_password = JSON.parse(db_password)
                config.password = parsed_password.password
              }
        },
        define: { charset: "utf8mb4", collate: 'utf8mb4_general_ci' } //this
    });

    since("created squelize")

    const db: db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        application: application.define(sequelize),
        booking: booking.define(sequelize),
        event: event.define(sequelize),
        organisation: organisation.define(sequelize),
        participant: participant.define(sequelize),
        payment: payment.define(sequelize),
        role: role.define(sequelize),
        user: user.define(sequelize),
        village: village.define(sequelize)
    }

    application.associate(db)
    booking.associate(db)
    event.associate(db)
    organisation.associate(db)
    participant.associate(db)
    payment.associate(db)
    role.associate(db)
    user.associate(db)
    village.associate(db)

    //@ts-ignore
    global.orm = db
    return db
}
