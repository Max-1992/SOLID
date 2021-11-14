import { ILeasingContract } from "../interface/leasingContract.interface";
import { ICancel } from "../interface/cancel.interface";
import { ISing } from "../interface/sing.interface";
import { IRenewal } from "../interface/renewal.interface";

export class LeasingContract implements ISing, ICancel, IRenewal {

    constructor(private leasingContract: ILeasingContract) {}

    public sing(): ILeasingContract {
        this.leasingContract.typeContract = 'LEASING'
        return this.leasingContract;
    }

    public cancel(): ILeasingContract {
        this.leasingContract.status = 'CANCELED'
        return this.leasingContract;
    }

    public renewal() {
        this.leasingContract.status = 'RENOVATED'
        return this.leasingContract;
    }
}