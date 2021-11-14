import { ApiBank } from './servicesIntegrations/apiBank';
import { ApiPayPal } from './servicesIntegrations/paypal';
import { ApiMercadoPago } from './servicesIntegrations/mercadoPago';

class StoreExampleApiBank {
    constructor(private apiBank: ApiBank) {}

    public purchese() {
        this.apiBank.charge()
    }
}

class StoreExamplePayPal {
    constructor(private apiPayPal: ApiPayPal) {}

    public purchese() {
        this.apiPayPal.chargeCustomer()
    }
}

class StoreExampleMercadoPago {
    constructor(private apiMercadoPago: ApiMercadoPago) {}

    public purchese() {
        this.apiMercadoPago.toPay()
    }
}