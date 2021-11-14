import { IMenuOutput } from '../interface/menuOuput.interface'

export class JsonMenuOutput implements IMenuOutput {
    constructor() {}

    outPut (products: any[]): any {
        const menu = JSON.stringify(products);
        return menu;
    }
    
}