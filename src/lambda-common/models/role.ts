import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";
import { UserModel } from "./user";

export interface RoleModel extends Model<InferAttributes<RoleModel>, InferCreationAttributes<RoleModel>> {
	name: string
	note?: string
	eventId?: number
	organisationId?: number
	villageId?: number
	userId: number

	user?: UserModel

}

export function define(sequelize: Sequelize) {
	return sequelize.define<RoleModel>('role', {
		name: {
			type: DataTypes.STRING
		},
		note: {
			type: DataTypes.TEXT
		},
		eventId: {
            type: DataTypes.INTEGER
        },
		organisationId: {
            type: DataTypes.INTEGER
        },
		villageId: {
            type: DataTypes.INTEGER
        },
		userId: {
			type: DataTypes.INTEGER
		}
	});
}

export function associate(models: any) {
	models.role.belongsTo(models.user)
	models.role.belongsTo(models.event)
	models.role.belongsTo(models.organisation)
	models.role.belongsTo(models.village)
}
