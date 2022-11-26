import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op, StringDataType } from "sequelize";

export interface ParticipantModel extends Model<InferAttributes<ParticipantModel>, InferCreationAttributes<ParticipantModel>> {
    id: CreationOptional<number>
    name: string
    age: Date
    diet: string
    dietExtra: string
    medical: string
    days: number
    externalExtra: any
    internalExtra: any
    bookingId: number
}

export function define(sequelize: Sequelize) {
    return sequelize.define<ParticipantModel>('participant', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.DATE
        },
        diet: {
            type: DataTypes.STRING
        },
        dietExtra: {
            type: DataTypes.TEXT
        },
        medical: {
            type: DataTypes.TEXT
        },
        days: {
            type: DataTypes.INTEGER
        },
        externalExtra: {
            type: DataTypes.JSON
        },
        internalExtra: {
            type: DataTypes.JSON
        },
        bookingId: {
            type: DataTypes.INTEGER
        },
    });
}
export function associate(models: any) {
    models.participant.belongsTo(models.booking);

    models.participant.addScope('KP', {
        attributes: ['id', 'name', 'age', 'diet', 'dietExtra', 'days', 'bookingId'],
    });

    models.participant.addScope('Money', {
        attributes: ['id', 'name', 'days', 'age', 'bookingId']
    });
};
