import { ApiBank } from '../servicesIntegrations/apiBank';
import { IPaymentProcessor } from '../interface/paymentProcessor';

export class ApiBankPaymentProcessorAdapter implements IPaymentProcessor {
    constructor(private apiBanck: ApiBank) {};

    public pay() {
        this.apiBanck.charge();
    }
}