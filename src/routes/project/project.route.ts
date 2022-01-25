import express, { Router } from "express";
import { createProjectController } from "../../controllers/project/createProjectController";
import { deleteProjectController } from "../../controllers/project/deleteProjectController";
import { getAllProjectsController } from "../../controllers/project/getAllProjectsController";
import { getProjectByIdController } from "../../controllers/project/getProjectByIdController";
import { updateProjectController } from "../../controllers/project/updateProjectController";

const projectRoutes: Router = express.Router();
projectRoutes.get("/api/projects/:id", getAllProjectsController);
projectRoutes.get("/api/project/:id", getProjectByIdController);
projectRoutes.post("/api/project/:id", createProjectController);
projectRoutes.put("/api/project/:id", updateProjectController);
projectRoutes.delete("/api/project/:id", deleteProjectController);

export { projectRoutes };
