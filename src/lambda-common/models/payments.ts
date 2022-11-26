
import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";
import { BookingModel } from "./booking";

export interface PaymentModel extends Model<InferAttributes<PaymentModel>, InferCreationAttributes<PaymentModel>> {
    id: CreationOptional<number>
    type: string,
    amount: number,
    note: string,
    booking?: BookingModel,
    bookingId: number
}

export function define(sequelize: Sequelize) {
    return sequelize.define<PaymentModel>('payment', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
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
        }
    });
}
export function associate(models: any) {
    models.payment.belongsTo(models.booking);
};

