import { ApiPayPal } from '../servicesIntegrations/paypal';
import { IPaymentProcessor } from '../interface/paymentProcessor';

export class PayPalPaymentProcessorAdapter implements IPaymentProcessor {
    constructor(private apiPayPal: ApiPayPal) {};

    public pay() {
        this.apiPayPal.chargeCustomer();
    }
}