import { db } from "../../db/config.db";
import { DataTypes } from "sequelize/dist";
import { Task } from "./Task.model";

const Todo = db.define('todo', {
    todoListId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Todo.hasMany(Task);

export {
    Todo
};