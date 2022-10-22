import { DataTypes, QueryInterface } from 'sequelize';

export const name = "22-role-note"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.changeColumn('roles', 'note', { type: DataTypes.TEXT });
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.changeColumn('roles', 'note', { type: DataTypes.STRING })
}
