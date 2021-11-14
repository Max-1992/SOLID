import { Contract } from "./contract";

import { Locator } from './models/locator';
import { Property } from './models/property';
import { Tenant } from './models/tenat';

import { ILeasingContract } from "./interface/leasingContract.interface";
import { IPurchaseContract } from "./interface/purchaseContract.interface";
import { ILocationContract } from "./interface/locationContract.interface";
import { LocationContract } from "./contract/locationContract";
import { LeasingContract } from "./contract/leasingContract";
import { PurchaseContract } from "./contract/purchaseContract";
import { IContract } from "./interface/contract.interface";

const tenant: Tenant = new Tenant('Maximiliano', 'Echevarria');
const locator: Locator = new Locator('Sol', 'Martinez');
const property: Property = new Property('Buenos Aires', 'Salguero', 650, '1609');


const createLocationContract = () => {

    // Helper de contrato de locación.
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

    // Creamos un contrato de locación
    const locationContract: LocationContract = new LocationContract(locatorContractData);

    const contract: Contract = new Contract();

    const signedContract = contract.create(locationContract);

    console.log(signedContract);

}

const cancelLocationContract = () => {

    // Helper de contrato de locación.
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

    // Creamos un contrato de locación
    const locationContract: LocationContract = new LocationContract(locatorContractData);

    const contract: Contract = new Contract();

    const signedContract = contract.cancel(locationContract);

    console.log(signedContract);

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

    const contract: Contract = new Contract();

    const signedContract = contract.create(leasingContractDataContract);

    console.log(signedContract);

}

const cancelLeasingContract  = () => {

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

    const contract: Contract = new Contract();

    const canceledContract = contract.cancel(leasingContractDataContract);

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

    const contract: Contract = new Contract();

    const signedContract = contract.create(purchaseContract);

    console.log(signedContract);

}

createLocationContract();
createLeasingContract();
createPurchaseContract();
cancelLocationContract();
cancelLeasingContract();