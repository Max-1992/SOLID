import { Contract } from "./createContract";
import { LocationContract } from "./locationContract";
import { PurchaseContract } from "./purchaseContract";
import { LeasingContract } from "./leasingContract";

import { Locator } from './models/locator';
import { Property } from './models/property';
import { Tenant } from './models/tenat';

import { ILeasingContract } from "./interface/leasingContract.interface";
import { IPurchaseContract } from "./interface/purchaseContract.interface";
import { ILocationContract } from "./interface/locationContract.interface";

const tenant: Tenant = new Tenant('Maximiliano', 'Echevarria');
const locator: Locator = new Locator('Sol', 'Martinez');
const property: Property = new Property('Buenos Aires', 'Salguero', 650, '1609');



const createLocationContract = () => {

    const locatorContractData: ILocationContract = {
        typeContract: null,
        createDate: new Date(),
        placeSignature: 'San Isidro, Buenos Aires',
        startDate: new Date(2022),
        finishDate: new Date(2025),
        totalAmount: 250000,
        durationYears: 3,
        durationMonth: 36,
        typeCurrency: 'Pesos Argentinos',
        tenant,
        locator,
        property,
    }

    const locationContract: LocationContract = new LocationContract(locatorContractData);
    const contract: Contract = new Contract(locationContract);

    const signedContract = contract.create();

    console.log(signedContract);

    const canceledContract = contract.cancel();

    console.log(canceledContract);
}


const createLeasingContract  = () => {

    const leasingContractData: ILeasingContract = {
        typeContract: null,
        createDate: new Date(),
        placeSignature: 'San Isidro, Buenos Aires',
        startDate: new Date(2021),
        finishDate: new Date(2027),
        totalAmount: 250000,
        durationYears: 3,
        durationMonth: 36,
        typeCurrency: 'Pesos Argentinos',
        tenant,
        locator,
        leaseObject: {
            brand: 'Renauld',
            model: 'Arkana',
            year: 2021,
            domain: 'ACL-4032'
        }
    }

    const leasingContractDataContract: LeasingContract = new LeasingContract(leasingContractData);

    const contract: Contract = new Contract(leasingContractDataContract);

    const signedContract = contract.create();

    console.log(signedContract);

    const canceledContract = contract.cancel();

    console.log(canceledContract);

}


const createPurchaseContract = () => {

    const purchaseContractData: IPurchaseContract = {
        typeContract: null,
        createDate: new Date(),
        placeSignature: 'San Isidro, Buenos Aires',
        totalAmount: 250000,
        typeCurrency: 'Dóaler Estado Unidense',
        paymentMethod: 'Cash',
        buyer: tenant,
        seller: locator,
        property,
    }

    const purchaseContract: PurchaseContract = new PurchaseContract(purchaseContractData);

    const contract: Contract = new Contract(purchaseContract);

    const signedContract = contract.create();

    console.log(signedContract);

    const canceledContract = contract.cancel();

    console.log(canceledContract);

}

createLocationContract();
createLeasingContract();
createPurchaseContract();