export interface IComunicadorExample {
    setEncryption: (encrption: string) => any;
    sendEmailText: (msg: string) => any;
    sendEmailNotification: (data: object) => any;
}