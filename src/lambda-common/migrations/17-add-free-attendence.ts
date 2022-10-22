import { DataTypes, QueryInterface } from 'sequelize';

export const name = "17-add-free-attendance"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.sequelize.query("ALTER TABLE `events` MODIFY COLUMN `partialDates` enum('whole', 'presets', 'free')")
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    return Promise.resolve()
}
