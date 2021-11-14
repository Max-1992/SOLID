import { IMenuOutput } from "../interface/MenuOuput.interface";

export class HtmlMenuOutput implements IMenuOutput {
    constructor () {}

    outPut(products: any[]): any {
        const menu = `<p>El menu es: ${products}</p>`;
        return menu;
    }
}