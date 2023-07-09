export abstract class Email {

	private readonly address: string;

	constructor(address: string) {
		if (!this.validateAddress()) {
			throw new Error("Invalid email address");
		}

		this.address = address;
	}

	private validateAddress(): boolean {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(this.address);
	}

	getAddress(): string {
		return this.address;
	}

}