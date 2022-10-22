import { DataTypes, QueryInterface } from 'sequelize';

export const name = "05-roles"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
	return await queryInterface.createTable("roles", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "users",
				key: "id"
			},
			onDelete: "CASCADE"
		},
		eventId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: "events",
				key: "id"
			},
			onDelete: "CASCADE"
		},
		organisationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: "organisations",
				key: "id"
			},
			onDelete: "CASCADE"
		},
		villageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: "villages",
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
	return await queryInterface.dropTable("roles");
}
