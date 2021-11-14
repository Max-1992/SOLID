import { IEncryption } from "./encryption";
import { IComunicador } from "./comunicador.interface";


export class Comunicador implements IComunicador, IEncryption {

    encriptaciónTypes: object = {
        defoult: 'NINGUNA',
        weak: 'DEBIL',
        strong: 'FUERTE'
    }

    constructor() {}

    public setEncryption(encrption: string) {}

    public sendEmailText(msg: string) {}

    public sendEmailNotification(data: object) {}
}