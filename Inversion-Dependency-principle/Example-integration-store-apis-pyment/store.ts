import { IPaymentProcessor } from "./interface/paymentProcessor";

export class Store {
    constructor(private paymentProcess: IPaymentProcessor) {}

    public purchese() {
        this.paymentProcess.pay();
    }
}