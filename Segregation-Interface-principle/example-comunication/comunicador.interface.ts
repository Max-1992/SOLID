export interface IComunicador {
    sendEmailText: (msg: string) => any;
    sendEmailNotification: (data: object) => any;
}