import { ILocationContract } from "../interface/locationContract.interface";
import { ICancel } from "../interface/cancel.interface";
import { ISing } from "../interface/sing.interface";
import { IRenewal } from "../interface/renewal.interface";

export class LocationContract implements ISing, ICancel, IRenewal {

    constructor(private locationContract: ILocationContract) {}

    public sing(): ILocationContract {
        this.locationContract.typeContract = 'LOCATION';
        return this.locationContract;
    }

    public cancel(): ILocationContract {
        this.locationContract.status = 'CANCELED'
        return this.locationContract;
    }

    public renewal() {
        this.locationContract.status = 'RENOVATED'
        return this.locationContract;
    }

}