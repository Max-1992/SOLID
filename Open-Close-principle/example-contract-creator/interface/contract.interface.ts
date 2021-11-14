import { ICancel } from "./cancel.interface";
import { IRenewal } from "./renewal.interface";
import { ISing } from "./sing.interface";

export interface IContract {
    create: (contract: ISing) => any;
    cancel: (contract: ICancel) => any;
    renewal: (contract: IRenewal) => any;
}