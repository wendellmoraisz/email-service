export interface EmailSender {
    send(emailOptions: EmailOptions): Promise<void>;
}

export interface EmailOptions {
    username: string;
    password: string;
    host: string;
    port: number;
    from: string;
    to: string[];
    subject: string;
    text: string;
    html: string;
}