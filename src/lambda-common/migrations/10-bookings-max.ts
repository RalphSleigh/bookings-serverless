import { DataTypes, QueryInterface } from 'sequelize';

export const name = "10-bookings-max"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.addColumn('bookings', 'maxParticipants', {
        type: DataTypes.INTEGER
    })
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.removeColumn('bookings', 'maxParticipants');
}
