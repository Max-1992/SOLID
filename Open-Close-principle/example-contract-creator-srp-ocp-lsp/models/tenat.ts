export class Tenant {

    public name: string;
    public lastName: string;

    constructor (name: string, lastName: string) {
        this.name = name;
        this.lastName = lastName;
    }

    get getName(): string {
        return this.name;
    }

    get getLastName(): string {
        return this.lastName;
    }

}