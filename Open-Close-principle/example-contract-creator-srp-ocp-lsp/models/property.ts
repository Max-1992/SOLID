export class Property {

    public city: string;
    public address: string;
    public number: number;
    public zip: string;

    constructor (city: string, address: string, number: number, zip: string) {
        this.city = city;
        this.address = address;
        this.number = number;
        this.zip = zip;
    }

    get getCity(): string {
        return this.city;
    }

    get getAddress(): string {
        return this.address;
    }

    get getNumber(): number {
        return this.number;
    }

    get getZip(): string {
        return this.zip;
    }

}