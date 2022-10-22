import { DataTypes, QueryInterface } from 'sequelize';

export const name = "03-orgs"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
	return await queryInterface.createTable("organisations", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING
		},
		eventId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "events",
				key: "id"
			},
			onDelete: "CASCADE"
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		}
	});
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
	return await queryInterface.dropTable("organisations");
}
