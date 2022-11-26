import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";
import { RoleModel } from "./role";

export interface EventModel extends Model<InferAttributes<EventModel>, InferCreationAttributes<EventModel>> {
   id: CreationOptional<number>
   name: string
   description: string
   startDate: Date,
   endDate: Date,
   bookingDeadline: Date
   bigCampMode: boolean
   organisationsEnabled: boolean
   partialDates: string
   partialDatesData: string
   bookingPolicy: string
   feeModel: string
   feeData: string
   paymentTypes: string
   paymentInfo: string
   customQuestions: string

   roles?: RoleModel[]
}

export function define(sequelize: Sequelize) {
    return sequelize.define<EventModel>('event', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        },
        bookingDeadline: {
            type: DataTypes.DATE
        },
        bigCampMode: {
            type: DataTypes.BOOLEAN
        },
        organisationsEnabled: {
            type: DataTypes.BOOLEAN
        },
        partialDates: {
            type: DataTypes.ENUM,
            values: ['whole', 'presets', 'free']
        },
        partialDatesData: {
            type: DataTypes.JSON
        },
        bookingPolicy: {
            type: DataTypes.ENUM,
            values: ['guest', 'registered', 'approved']
        },
        feeModel: {
            type: DataTypes.ENUM,
            values: ['free', 'flat', 'ealing', 'big', 'vcamp']
        },
        feeData: {
            type: DataTypes.JSON
        },
        paymentTypes: {
            type: DataTypes.JSON
        },
        paymentInfo: {
            type: DataTypes.TEXT
        },
        customQuestions: {
            type: DataTypes.JSON
        }
    });
}

export function associate(models: any) {
    models.event.hasMany(models.organisation);
    models.event.hasMany(models.booking);
    models.event.hasMany(models.village);
    models.event.hasMany(models.application);
    models.event.hasMany(models.role);
    models.event.belongsTo(models.user);

    models.event.addScope('details',
        {
            include: [{ model: models.role, include: [models.user, models.organisation, models.village] },
            { model: models.organisation },
            { model: models.application, include: [models.user] },
            { model: models.village },
            { model: models.user }]
        },
        { override: true });
};

