import { Locator } from '../models/locator';
import { Property } from '../models/property';
import { Tenant } from '../models/tenat';

export interface IPurchaseContract {
    typeContract: string;
    createDate: Date;
    placeSignature: string;
    totalAmount: number;
    typeCurrency: string;
    paymentMethod: string;
    buyer: Tenant;
    seller: Locator;
    property: Property;
}