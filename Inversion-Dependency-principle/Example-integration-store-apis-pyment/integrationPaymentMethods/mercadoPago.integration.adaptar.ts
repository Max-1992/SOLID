import { ApiMercadoPago } from '../servicesIntegrations/mercadoPago';
import { IPaymentProcessor } from '../interface/paymentProcessor';

export class MercadoPagoPaymentProcessorAdapter implements IPaymentProcessor {
    constructor(private apiMercadoPago: ApiMercadoPago) {};

    public pay() {
        this.apiMercadoPago.toPay();
    }
}