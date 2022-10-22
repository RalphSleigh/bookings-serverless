import { DataTypes, QueryInterface } from 'sequelize';

export const name = "08-applications"

export async function up({ context: queryInterface }: { context: QueryInterface }) {
    return await queryInterface.createTable("applications", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        message: {
            type: DataTypes.STRING
        },
        eventId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "events",
                key: "id"
            },
            onDelete: "CASCADE",
            unique: 'userEvent'
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
            onDelete: "CASCADE",
            unique: 'userEvent'
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
    return await queryInterface.dropTable("applications");
}
