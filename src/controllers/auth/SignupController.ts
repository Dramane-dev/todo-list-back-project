import { User } from "../../models/User.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { passwordConfirmed } from "../../functions/auth/passwordConfirmed";

export const SignupController = (req: Request, res: Response) => {
    let isSamePassword: boolean = passwordConfirmed(req.body.password, req.body.confirmedPassword);

    if (isSamePassword) {
        User.create({
            name: req.body.name.toLowerCase(),
            email: req.body.email.toLowerCase(),
            password: bcrypt.hashSync(req.body.password, 12),
        })
            .then(() => {
                return res.send({
                    message: "User registred successfuly ✅!",
                    user: {
                        name: req.body.name,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 12),
                    },
                });
            })
            .catch((error) => {
                return res.status(500).send({
                    message: error.message + " ⚠️",
                });
            });
    } else {
        return res.status(401).send({
            message: "The password is not same to confirmed password ❌",
        });
    }
};
