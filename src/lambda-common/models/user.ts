import { Sequelize, DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional, Op } from "sequelize";
import { db } from "../orm";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>
    remoteId: string
    userName: string
    password: CreationOptional<string>
    email: string
    source: string
}

export function define(sequelize: Sequelize) {
    return sequelize.define<UserModel>('user', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        remoteId: {
            type: DataTypes.STRING
        },
        userName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        source: {
            type: DataTypes.STRING
        }
    });
}

export function associate(models: db) {
    models.user.hasMany(models.event);
    models.user.hasMany(models.role);
    models.user.hasMany(models.booking);
    models.user.hasMany(models.application);

    models.user.addScope('defaultScope',
        {
            attributes: ['id', 'userName', 'email', 'remoteId']

        },
        { override: true });

    models.user.addScope('withPassword',
        {});

    models.user.addScope('withData', {
        attributes: ['id', 'userName', 'email', 'remoteId', 'source'],
        include: [{ model: models.role }, { model: models.application.scope('userScope') }]
    });
};
