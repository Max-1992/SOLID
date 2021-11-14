import { IPurchaseContract } from "../interface/purchaseContract.interface";
import { ISing } from "../interface/sing.interface";

export class PurchaseContract implements ISing {

    constructor(private purchaseContract: IPurchaseContract) {
        this.purchaseContract.typeContract = 'PURCHASE';
    }

    public sing(): IPurchaseContract {
        this.purchaseContract.typeContract = 'PURCHASE';
        return this.purchaseContract;
    }

}