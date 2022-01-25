import { User } from "../../models/User.model";
import { Request, Response } from "express";
import { verifyPassword } from "../../functions/auth/verifyPassword";
import { generateTokenAndRefreshToken } from "../../functions/auth/generateToken";
import config from "../../../config/defaults";

export const SigninController = (req: Request, res: Response) => {
    User.findOne({
        where: {
            email: req.body.email.toLowerCase(),
        },
    })
        .then((user) => {
            let password: string = req.body.password;
            let validPassword: boolean = !verifyPassword(password, user?.getDataValue("password"));

            if (!user || validPassword) {
                return res.status(404).send({
                    message: "Invalid informations ❌!",
                });
            }

            let token: string = generateTokenAndRefreshToken(
                user?.getDataValue("userId"),
                String(process.env.ACCESS_TOKEN_SECRET)
            );
            let refreshToken: string = generateTokenAndRefreshToken(
                user?.getDataValue("userId"),
                String(process.env.REFRESH_TOKEN_SECRET)
            );

            config.refreshTokens.push(refreshToken);

            return res.status(200).send({
                message: "User connected successfuly ✅!",
                user: {
                    name: user?.getDataValue("name"),
                    email: user?.getDataValue("email"),
                    accessToken: token,
                    refreshToken: refreshToken,
                },
            });
        })
        .catch((error) => {
            if (error.message.includes("data and hash arguments required")) {
                return res.status(404).send({
                    message: "Invalid informations ⚠️",
                });
            } else {
                return res.status(404).send({
                    message: error.message + " ⚠️",
                });
            }
        });
};
