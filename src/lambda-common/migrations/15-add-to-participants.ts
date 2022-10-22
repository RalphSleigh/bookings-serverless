import { DataTypes, QueryInterface } from 'sequelize';

export const name = "15-participants-extra"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.addColumn('participants', 'internalExtra', { type: DataTypes.JSON })
    return await queryInterface.addColumn('participants', 'externalExtra', { type: DataTypes.JSON })
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.removeColumn('participants', 'internalExtra')
    return await queryInterface.removeColumn('participants', 'externalExtra')

}
