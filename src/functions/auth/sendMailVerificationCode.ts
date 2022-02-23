import crypto from "crypto";
import nodemailer, { SentMessageInfo } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { IUser } from "../../interfaces/user.interface";

export const sendMailVerificationCode = (user: IUser): Promise<boolean | string> => {
    return new Promise(async (resolve, reject) => {
        try {
            let transport: Mail<SentMessageInfo> = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: parseInt(String(process.env.MAIL_PORT)),
                secure: false,
                auth: {
                    user: process.env.MAIL_ADDRESS,
                    pass: process.env.MAIL_PASSWORD
                }
            });
        
            let message = await transport.sendMail({
                from: process.env.MAIL_ADDRESS,
                to: user.email,
                subject: process.env.MAIL_SUBJECT + " ✅",
                text: `
                    Bonjour ${ user.firstname } 👋, \n 
                    
                    Voici le code te permettant de vérifier ton email : ${ user.mailVerificationCode }\n
        
                    Il te suffit simplement de le copier/coller dans le champ prévue à cet effet !\n
        
                    Simply Todo
                `
            });
        
            console.log("[ Message id ] ", message.messageId);
            console.log(nodemailer.getTestMessageUrl(message));

            resolve(true);
        } catch (error: any) {
            reject(error.message);
        }
    })
};