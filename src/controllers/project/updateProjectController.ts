import { Request, Response } from "express";
import { Project } from "../../models/Project.model";
import { User } from "../../models/User.model";

interface Project {
    projectId: number,
    name: string,
    description: string,
    userId: number
}

export const updateProjectController = async (req: Request, res: Response) => {
    let projectId: string = req.params.projectId;
    let userId: string = req.params.userId;
    let userProjects: Project[] = [];

    let projects: Project[] = await User.findByPk(userId, { include: ["projects"] })
        .then((user) => {
            if (user) {
                return user.getDataValue("projects");
            } else {
                return [];
            }
        })
        .catch(() => []);

        userProjects = projects.filter(project => project.projectId === parseInt(projectId));

        if (userProjects.length > 0) {
            Project.update(
                {
                    name: req.body.name,
                    description: req.body.description
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
        } else {
            return res.send({
                message: "Project not found ❌",
            });
        }
};
