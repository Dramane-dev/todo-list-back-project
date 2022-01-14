import jwt from "jsonwebtoken";

export const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, String(process.env.ACCESS_TOKEN_SECRET), {
        expiresIn: 86400
    });
};