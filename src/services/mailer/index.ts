import { IEmail, IEmailService } from "../../types";

export class MailerService implements IEmailService {
    public SendEmail = async (email: IEmail): Promise<string> => {
        const response = await fetch("https://yeferson-portfolio-api.herokuapp.com/send", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        });

        const data = await response.json();

        return data.message
    }
}