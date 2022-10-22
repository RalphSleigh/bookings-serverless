import { DataTypes, QueryInterface } from 'sequelize';

export const name = "21-applications-message"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.changeColumn('applications', 'message', { type: DataTypes.TEXT });
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.changeColumn('applications', 'message', { type: DataTypes.STRING })
}
