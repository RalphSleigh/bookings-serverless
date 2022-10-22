
import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";

export interface PaymentModel extends Model<InferAttributes<PaymentModel>, InferCreationAttributes<PaymentModel>> {
}

export function define<PaymentModel>(sequelize: Sequelize) {
    return sequelize.define('payment', {
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
        }
    });
}
export function associate(models: any) {
    models.payment.belongsTo(models.booking);
};

