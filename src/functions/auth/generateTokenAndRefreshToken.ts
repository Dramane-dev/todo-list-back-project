import jwt from "jsonwebtoken";

export const generateTokenAndRefreshToken = (userId: string, secret: string): string => {
    return jwt.sign({ id: userId }, secret, {
        expiresIn: 86400,
    });
};
