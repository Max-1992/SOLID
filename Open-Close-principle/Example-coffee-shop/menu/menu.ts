import { IMenuOutput } from '../interface/menuOuput.interface'

export class Menu {
    constructor(private menuOutput: IMenuOutput) {}

    public view(products: any[]) {
        const viewMenu = this.menuOutput.outPut(products);
        return viewMenu;
    }
}