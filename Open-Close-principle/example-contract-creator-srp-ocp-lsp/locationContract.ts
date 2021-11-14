import { IContract } from "./interface/contract.interface";
import { ILocationContract } from "./interface/locationContract.interface";

export class LocationContract implements IContract {

    constructor(private locationContract: ILocationContract) {}

    public firmar() {
        this.locationContract.typeContract = 'LOCATION';
        return this.locationContract;
    }

    public anular() {
        this.locationContract.status = 'CANCELED'
        return this.locationContract;
    }
}