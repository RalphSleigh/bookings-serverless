
import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";

export interface OrganisationModel extends Model<InferAttributes<OrganisationModel>, InferCreationAttributes<OrganisationModel>> {
	id: CreationOptional<number>
	name: string
	eventId: number
}

export function define(sequelize: Sequelize) {
	return sequelize.define<OrganisationModel>('organisation', {
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
	models.organisation.belongsTo(models.event)
	models.organisation.hasMany(models.booking)
	models.organisation.hasMany(models.role)
}
