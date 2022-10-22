import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional } from "sequelize";

export interface ApplicationModel extends Model<InferAttributes<ApplicationModel>, InferCreationAttributes<ApplicationModel>> {
}

export function define(sequelize: Sequelize) {
    return sequelize.define<ApplicationModel>('application', {
        message: {
            type: DataTypes.STRING
        },
    });
}

export function associate(models: any){
    models.application.belongsTo(models.user, {
        foreignKey: {
            field: 'userId',
            allowNull: false,
            unique: 'userEvent',
        },
        onDelete: 'cascade'
    });
    models.application.belongsTo(models.event, {
        foreignKey: {
            field: 'eventId',
            allowNull: false,
            unique: 'userEvent',
        },
        onDelete: 'cascade'
    });

    models.application.addScope('defaultScope',
        {
            include: [{ model: models.event }, { model: models.user }]

        },
        { override: true });
}

