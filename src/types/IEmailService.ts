import { IEmail } from "./IEmail";

export interface IEmailService {
    SendEmail: (email: IEmail) => Promise<string>;
}