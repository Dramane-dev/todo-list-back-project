import { DataTypes } from "sequelize";
import { db } from "../../db/config.db";
import { Project } from "./Project.model";

export const User = db.define("user", {
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(Project, { as: "projects", foreignKey: "userId", onDelete: "cascade", onUpdate: "cascade" });
Project.belongsTo(User, { as: "user", foreignKey: "userId" });
