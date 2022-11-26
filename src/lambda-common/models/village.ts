import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";
import { EventModel } from "./event";

export interface VillageModel extends Model<InferAttributes<VillageModel>, InferCreationAttributes<VillageModel>> {
	id: CreationOptional<number>
	name: string
	eventId: number
	event?: EventModel
}

export function define(sequelize: Sequelize) {
	return sequelize.define<VillageModel>('village', {
		id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
		name: {
			type: DataTypes.STRING
		},
		eventId: {
			type: DataTypes.INTEGER
		}
	});
}


export function associate(models: any) {
	models.village.belongsTo(models.event)
	models.village.hasMany(models.role)
	models.village.hasMany(models.booking)
}
