import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

import { RequestEmailModel } from "./email.model";

@Injectable()
export class EmailService {

    constructor() { }

    send(data: RequestEmailModel) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.umbler.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.IMG_SERVICE_SOURCE_EMAIL,
                pass: process.env.IMG_SERVICE_SOURCE_PASSWORD,
            }
        });

        const mailOptions = {
            from: process.env.IMG_SERVICE_SOURCE_EMAIL,
            to: data.email,
            subject: data.template.subject,
            text: data.template.content
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("ERRO EMAIL SENT", error);
            } else {
                console.info("EMAIL SENT", info.response);
            }
        });
    }

}