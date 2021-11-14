import { Locator } from '../models/locator';
import { Property } from '../models/property';
import { Tenant } from '../models/tenat';

export interface ILocationContract {
    typeContract: string;
    createDate: Date;
    placeSignature: string;
    startDate: Date;
    finishDate: Date;
    totalAmount: number;
    durationYears: number;
    durationMonth: number;
    typeCurrency: string;
    tenant: Tenant;
    locator: Locator;
    property: Property;
    status?: string;
}