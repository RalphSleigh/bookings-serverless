import { DataTypes, QueryInterface } from 'sequelize';

export const name = "11-payment-types-enum"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.sequelize.query("ALTER TABLE `events` MODIFY COLUMN `feeModel` enum('free', 'flat', 'ealing','big')")
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    return Promise.resolve()
}
