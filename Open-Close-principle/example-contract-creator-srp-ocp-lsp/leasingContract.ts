import { IContract } from "./interface/contract.interface";
import { ILeasingContract } from "./interface/leasingContract.interface";

export class LeasingContract implements IContract {

    constructor(private leasingContract: ILeasingContract) {}

    public firmar() {
        this.leasingContract.typeContract = 'LEASING'
        return this.leasingContract;
    }

    public anular() {
        this.leasingContract.status = 'CANCELED'
        return this.leasingContract;
    }
}