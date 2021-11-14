import { IContract } from "./interface/contract.interface";

export class Contract {
    constructor(private contract: IContract) {}

    create() {
        const contract = this.contract.firmar();
        console.log('Contrato Firmado: ', contract);
        return contract;
    }

    cancel() {
        const contract = this.contract.anular();
        console.log('Contrato Anulado: ', contract);
        return contract;
    }
}