import { DataTypes } from "sequelize";
import { db } from "../../db/config.db";

export const Todo = db.define("todo", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
