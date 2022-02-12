import { Request, Response } from "express";
import { Task } from "../../models/Task.model";

export const updateTaskController = (req: Request, res: Response) => {
    let id: string = req.params.id;
    let projectId: string = req.params.projectId;
    
    Task.update({
        name: req.body.name,
        description: req.body.description,
        created_at: req.body.created_at,
        projectId: projectId,
    }, {
        where: {
            id: id
        }
    })
        .then(() => {
            return res.status(200).send({
                message: "Task updated successfully ✅!"
            });
        })
        .catch((error) => {
            return res.send({
                message: error.message + " ❌",
            });
        });
};
