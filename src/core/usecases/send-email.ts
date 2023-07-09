import { EmailOptions, EmailSender } from "./ports/email-sender";

export class SendEmail {

	private readonly emailOptions: EmailOptions;
	private readonly emailSender: EmailSender;

	constructor(emailOptions: EmailOptions, emailSender: EmailSender) {
		this.emailOptions = emailOptions;
		this.emailSender = emailSender;
	}

	public async execute(): Promise<void> {
		this.emailSender.send(this.emailOptions);
	}

}