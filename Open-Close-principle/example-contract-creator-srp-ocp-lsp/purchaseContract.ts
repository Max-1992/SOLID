import { IContract } from "./interface/contract.interface";
import { IPurchaseContract } from "./interface/purchaseContract.interface";

export class PurchaseContract implements IContract {

    constructor(private purchaseContract: IPurchaseContract) {
        this.purchaseContract.typeContract = 'PURCHASE';
    }

    public firmar() {
        this.purchaseContract.typeContract = 'PURCHASE';
        return this.purchaseContract;
    }

    public anular() { throw new Error('NotImplementMethod') }
}