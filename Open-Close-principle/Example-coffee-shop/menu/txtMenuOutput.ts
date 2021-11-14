import { IMenuOutput } from "../interface/MenuOuput.interface";

export class TextMenuOutput implements IMenuOutput {
    constructor () {}

    outPut(products: any[]): any {
        const menu = products.toLocaleString();
        return menu;
    }
}