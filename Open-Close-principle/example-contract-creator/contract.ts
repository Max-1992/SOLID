import { IContract } from "./interface/contract.interface";
import { ISing } from './interface/sing.interface';
import { ICancel } from './interface/cancel.interface';
import { IRenewal } from "./interface/renewal.interface";

export class Contract implements IContract {
    constructor() {}

    create(contract: ISing) {
        const signedContract = contract.sing();
        console.log('Contrato Firmado: ', signedContract);
        return contract;
    }

    cancel(contract: ICancel) {
        const canceledContract = contract.cancel();
        console.log('Contrato Anulado: ', canceledContract);
        return contract;
    }

    renewal(contract: IRenewal) {
        const renovatedContract = contract.renewal();
        console.log('Contrato Renovado: ', renovatedContract);
         return contract;
    }
}