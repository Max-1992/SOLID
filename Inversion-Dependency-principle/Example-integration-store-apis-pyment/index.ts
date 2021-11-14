import { Store } from './store';

import { ApiBankPaymentProcessorAdapter } from './integrationPaymentMethods/banck.integration.adapter';
import { MercadoPagoPaymentProcessorAdapter } from './integrationPaymentMethods/mercadoPago.integration.adaptar';
import { PayPalPaymentProcessorAdapter } from './integrationPaymentMethods/paypal.integration.adapter';

import { ApiBank } from './servicesIntegrations/apiBank'
import { ApiMercadoPago } from './servicesIntegrations/mercadoPago'
import { ApiPayPal } from './servicesIntegrations/paypal'

const payToApiBanck = () => {
    const paymentMethodIntegration = new ApiBankPaymentProcessorAdapter(new ApiBank);
    const store = new Store(paymentMethodIntegration);
    store.purchese()
}

const payToMercadoPago = () => {
    const paymentMethodIntegration = new MercadoPagoPaymentProcessorAdapter(new ApiMercadoPago);
    const store = new Store(paymentMethodIntegration);
    store.purchese()
}

const payToPayPal = () => {
    const paymentMethodIntegration = new PayPalPaymentProcessorAdapter(new ApiPayPal);
    const store = new Store(paymentMethodIntegration);
    store.purchese()
}