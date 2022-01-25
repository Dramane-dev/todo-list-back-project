import { Request, Response } from "express";
import { Project } from "../../models/Project.model";

export const createProjectController = (req: Request, res: Response) => {
    Project.create({
        name: req.body.name,
        userId: req.params.id,
    })
        .then(() => {
            res.status(200).send({
                message: "Project created successfuly ✅!",
                todo: {
                    name: req.body.name,
                    projectId: req.body.projectId,
                    userId: req.params.id,
                },
            });
        })
        .catch((error) => {
            return res.status(500).send({
                message: error.message + " ❌",
            });
        });
};
