import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";

export interface VillageModel extends Model<InferAttributes<VillageModel>, InferCreationAttributes<VillageModel>> {
}

export function define<VillageModel>(sequelize: Sequelize) {
	return sequelize.define('village', {
		name: {
			type: DataTypes.STRING
		}
	});
}


export function associate(models: any) {
	models.village.belongsTo(models.event)
	models.village.hasMany(models.role)
	models.village.hasMany(models.booking)
}
