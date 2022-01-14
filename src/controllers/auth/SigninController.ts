import { User } from "../../models/User.model";
import { Request, Response } from "express";
import { verifyPassword } from "../../functions/verifyPassword";
import { generateToken } from "../../functions/generateToken";

export const SigninController = (req: Request, res: Response) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
     .then(user => {
         let password: string = req.body.password;
         let validePassword: boolean = !verifyPassword(password, user?.getDataValue('password'));

         if (!user || validePassword) {
            return res.status(404).send({
                message: 'User '
            });
         }

        return res.status(200).send({
            message: 'User connected successfuly ✅!',
            user: {
                name: user?.getDataValue('name'),
                email: user?.getDataValue('email'),
                accessToken: generateToken(user?.getDataValue('userId'))
            }
        });
     })
     .catch(error => {
         return res.status(404).send({
            message: error.message + " ⚠️"
        });
     });
};