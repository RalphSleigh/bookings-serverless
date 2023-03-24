import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";
import { EventModel } from "./event";
import { OrganisationModel } from "./organisation";
import { UserModel } from "./user";
import { VillageModel } from "./village";

export interface RoleModel extends Model<InferAttributes<RoleModel>, InferCreationAttributes<RoleModel>> {
	id: CreationOptional<number>
	name: string
	note?: string
	eventId?: number
	event?: EventModel
	organisationId?: number
	villageId?: number
	userId: number
	user?: UserModel
	village?: VillageModel
	organisation?: OrganisationModel
}

export function define(sequelize: Sequelize) {
	return sequelize.define<RoleModel>('role', {
		id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
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
