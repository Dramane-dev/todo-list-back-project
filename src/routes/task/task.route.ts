import express, { Router } from "express";
import { createTaskController } from "../../controllers/task/createTaskController";
import { getAllTasksController } from "../../controllers/task/getAllTasksController";
import { getTaskByIdController } from "../../controllers/task/getTaskByIdController";

const taskRoute: Router = express.Router();
taskRoute.get("/api/tasks/:id", getAllTasksController);
taskRoute.get("/api/task/:id", getTaskByIdController);
taskRoute.post("/api/task/:id", createTaskController);
taskRoute.put("/api/tasks/:id");
taskRoute.delete("/api/tasks/:id");

export { taskRoute };
