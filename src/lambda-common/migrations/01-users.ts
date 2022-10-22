import { DataTypes, QueryInterface } from 'sequelize';

export const name = "01-users"

export async function up({ context: queryInterface}: {context: QueryInterface }) {
		return await queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
            facebookProfileId: {
                type: DataTypes.STRING
            },
			userName: {
				type: DataTypes.STRING
			},
			password: {
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING,
				unique: true
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

export async function down({ context: queryInterface}: {context: QueryInterface} ) {
		return await queryInterface.dropTable("users");
	}