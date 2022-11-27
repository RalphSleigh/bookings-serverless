import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional } from "sequelize";
import { EventModel } from "./event";
import { UserModel } from "./user";

export interface ApplicationModel extends Model<InferAttributes<ApplicationModel>, InferCreationAttributes<ApplicationModel>> {
    id: CreationOptional<number>
    message: string
    eventId: number
	event?: EventModel
    userId: number
    user?: UserModel
}

export function define(sequelize: Sequelize) {
    return sequelize.define<ApplicationModel>('application', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
            type: DataTypes.STRING
        },
        eventId: {
			type: DataTypes.INTEGER
		},
        userId: {
			type: DataTypes.INTEGER
		}
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

        models.application.addScope('userScope',
        {},{ override: true });    
}

