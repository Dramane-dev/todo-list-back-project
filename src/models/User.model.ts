import { DataTypes } from 'sequelize';
import { db } from '../../db/config.db';

export const User = db.define('user', {
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});