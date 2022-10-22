import { DataTypes, QueryInterface } from 'sequelize';

export const name = "18-role-note"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.addColumn('roles', 'note', {
        type: DataTypes.STRING
    })
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.removeColumn("roles", 'note');
}
