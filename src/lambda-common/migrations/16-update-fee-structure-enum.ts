import { DataTypes, QueryInterface } from 'sequelize';

export const name = "16-update-fee-structure"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.sequelize.query("ALTER TABLE `events` MODIFY COLUMN `feeModel` enum('free', 'flat', 'ealing','big', 'vcamp')")
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    return Promise.resolve()
}
