import { DataTypes } from "sequelize";
import { db } from "../../db/config.db";
import { Todo } from "./Todo.model";

const Task = db.define("todo", {
    id: {
        type: DataTypes.UUID,
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

Task.belongsTo(Todo);

export {
    Task
};