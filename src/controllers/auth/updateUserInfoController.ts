import { Request, Response } from "express";
import { User } from "../../models/User.model";

export const updateUserInfoController = (req: Request, res: Response) => {
    User.update(
        {
            name: req.body.name,
            email: req.body.email,
        },
        {
            where: {
                userId: req.params.id,
            },
        }
    )
        .then(() => {
            return res.status(200).send({
                message: "User informations updated successfully ✅!",
            });
        })
        .catch((error) => {
            return res.status(403).send({
                message: error.message + " ❌",
            });
        });
};
