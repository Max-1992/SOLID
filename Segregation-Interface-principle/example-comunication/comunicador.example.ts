import { IComunicadorExample } from "./comunicador.example.interface";

class ComunicadorExample implements IComunicadorExample {

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