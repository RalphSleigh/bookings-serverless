import { DataTypes, QueryInterface } from 'sequelize';

export const name = "07-participants"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
	return await queryInterface.createTable("participants", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
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
		bookingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "bookings",
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
	return await queryInterface.dropTable("participants");
}
