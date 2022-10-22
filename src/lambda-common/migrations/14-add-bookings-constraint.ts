import { DataTypes, QueryInterface } from 'sequelize';

export const name = "14-add-bookings-constraints"

export async function up({ context: queryInterface}: {context: QueryInterface }) {
		return await queryInterface.addConstraint('bookings', {
            fields: ['userId', 'eventId'],
            type: 'unique'})
}

export async function down({ context: queryInterface}: {context: QueryInterface} ) {
}