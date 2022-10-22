import { DataTypes, QueryInterface } from 'sequelize';

export const name = "13-upgrade-users"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.removeColumn(`users`, `facebookProfileId`)
    return await queryInterface.addColumn('users', 'remoteId', {
        type: DataTypes.STRING
    })
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.removeColumn(`users`, `remoteId`)
    return await queryInterface.addColumn('users', 'facebookProfileId', {
        type: DataTypes.STRING,
    })
}