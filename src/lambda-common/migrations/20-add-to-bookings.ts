import { DataTypes, QueryInterface } from 'sequelize';

export const name = "20-add-bookings-extra"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.addColumn('bookings', 'internalExtra', { type: DataTypes.JSON })
    return await queryInterface.addColumn('bookings', 'externalExtra', { type: DataTypes.JSON })
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    await queryInterface.removeColumn('bookings', 'internalExtra')
    return await queryInterface.removeColumn('bookings', 'externalExtra')

}
