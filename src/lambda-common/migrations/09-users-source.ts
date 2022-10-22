import { DataTypes, QueryInterface } from 'sequelize';

export const name = "09-user-sources"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.addColumn('users', 'source', {
        type: DataTypes.STRING
    })
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.removeColumn("users", 'source');
}
