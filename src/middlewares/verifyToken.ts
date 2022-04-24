import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let authHeader: string = req.headers["authorization"] as string;
    let token: string = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(403).send({
            message: "No token provided ❌ !",
        });
    }

    let secret: Secret = process.env.ACCESS_TOKEN_SECRET as Secret;

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unhauthorized ❌ !",
            });
        }

        if (decoded !== undefined) {
            req.params.userId = decoded.id;
        }

        next();
    });
};
