import { Request, Response } from "express";
import { Project } from "../../models/Project.model";

export const updateProjectController = (req: Request, res: Response) => {
    let projectId: string = req.params.id;

    Project.update(
        {
            name: req.body.name,
        },
        {
            where: {
                projectId: projectId,
            },
        }
    )
        .then(() => {
            return res.status(200).send({
                message: "Project updated successfully ✅!",
            });
        })
        .catch((error) => {
            return res.send({
                message: error.message + " ❌",
            });
        });
};
