import bcrypt from "bcrypt";

export const updatePassword = (password: string): string => {
    return bcrypt.hashSync(password, 12);
}