
import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";

export interface ParticipantModel extends Model<InferAttributes<ParticipantModel>, InferCreationAttributes<ParticipantModel>> {
}

export function define<ParticipantModel>(sequelize: Sequelize) {
    return sequelize.define('participant', {
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
        }
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
