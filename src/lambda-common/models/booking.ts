import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op, ForeignKey, BelongsTo } from "sequelize";
import { EventModel } from "./event";
import { OrganisationModel } from "./organisation";
import { ParticipantModel } from "./participant";
import { UserModel } from "./user";
import { VillageModel } from "./village";

export interface BookingModel extends Model<InferAttributes<BookingModel>, InferCreationAttributes<BookingModel>> {
    id: CreationOptional<number>
    eventId: number
    event?: EventModel
    userName: string
    userEmail: string
    userContact: string
    userId: number
    user?: UserModel
    district: string
    paymentType: string
    paid: boolean
    note: string
    emergencyName: string
    emergencyPhone: string
    campWith: string
    guestUUID: string
    maxParticipants: number
    externalExtra: string
    internalExtra: string
    villageId?: number
    participants?: ParticipantModel[]
}

export function define(sequelize: Sequelize) {
    return sequelize.define<BookingModel>('booking', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING
        },
        userEmail: {
            type: DataTypes.TEXT,
            unique: 'userEvent' //each booking must have a unique event/email combo
        },
        userContact: {
            type: DataTypes.TEXT
        },
        userId: {
            type: DataTypes.INTEGER
        },
        district: {
            type: DataTypes.TEXT
        },
        paymentType: {
            type: DataTypes.STRING
        },
        paid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        note: {
            type: DataTypes.TEXT
        },
        emergencyName: {
            type: DataTypes.TEXT
        },
        emergencyPhone: {
            type: DataTypes.TEXT
        },
        campWith: {
            type: DataTypes.TEXT
        },
        guestUUID: {
            type: DataTypes.UUID
        },
        maxParticipants: {
            type: DataTypes.INTEGER
        },
        externalExtra: {
            type: DataTypes.JSON
        },
        internalExtra: {
            type: DataTypes.JSON
        },
        eventId: {
            type: DataTypes.INTEGER
        }
    })
}

export function associate(models: any) {
    models.booking.belongsTo(models.organisation);
    models.booking.belongsTo(models.user);
    models.booking.belongsTo(models.village);
    models.booking.belongsTo(models.event, {
        foreignKey: {
            field: 'eventId',
            allowNull: false,
            unique: 'userEvent',
        },
        onDelete: 'cascade'
    });
    models.booking.hasMany(models.participant, {
        foreignKey: {
            allowNull: false,
        }
    });

    models.booking.hasMany(models.payment, {
        foreignKey: {
            allowNull: false,
        }
    });

    models.booking.addScope('Limited', (event: EventModel, village: VillageModel, organisation: OrganisationModel, scope: any, includePayments: Boolean) => {

        let where: any = null;

        if (village !== null && organisation !== null) where = {
            [Op.and]: {
                eventId: {
                    [Op.eq]: event
                },
                [Op.or]: {
                    organisationId: {
                        [Op.eq]: organisation
                    },
                    villageId: {
                        [Op.eq]: organisation
                    }
                }
            }
        };

        else if (village === null && organisation !== null) where = {
            [Op.and]: {
                eventId: {
                    [Op.eq]: event
                },
                organisationId: {
                    [Op.eq]: organisation
                }
            }
        };


        else if (village !== null && organisation === null) where = {
            [Op.and]: {
                eventId: {
                    [Op.eq]: event
                },
                villageId: {
                    [Op.eq]: village
                }
            }
        };

        else where = {
            eventId: {
                [Op.eq]: event
            }
        };

        const include = [];
//@ts-ignore
        if (scope) include.push({ model: models.participant.scope(scope) })
//@ts-ignore
        if (includePayments) include.push({ model: models.payment });
        return { where: where, include: include }
    }
    );
};