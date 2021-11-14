import { Locator } from '../models/locator';
import { Tenant } from '../models/tenat';

export interface ILeasingContract {
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
    leaseObject: object;
    status?: string;
}