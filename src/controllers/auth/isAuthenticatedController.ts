import { Request, Response } from "express";
import { User } from "../../models/User.model";
import jwt, { Secret } from "jsonwebtoken";

export const isAuthenticatedController = (req: Request, res: Response) => {
    let tokenFromAuthHeader: string = req.headers['authorization'] as string;
    let token: string = tokenFromAuthHeader && tokenFromAuthHeader.split(' ')[1];

    if (!token) {
        return res.status(403).send({
            message: "No token provided ❌ !"
        });
    }

    let secret: Secret = process.env.ACCESS_TOKEN_SECRET as Secret;

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unhauthorized ❌ !"
            });
        }

        if (decoded !== undefined) {
            return res.status(200).send({
                message: "User authenticated ✅"
            });
        }
    });
};