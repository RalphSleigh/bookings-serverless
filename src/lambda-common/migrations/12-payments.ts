import { DataTypes, QueryInterface } from 'sequelize';

export const name = "12-payments"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.createTable("payments", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.STRING,
            values: ['adjustment', 'payment'],
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        note: {
            type: DataTypes.TEXT
        },
        bookingId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "bookings",
                key: "id"
            },
            onDelete: "CASCADE"
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });
}

export async function down({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.dropTable("payments");
}
