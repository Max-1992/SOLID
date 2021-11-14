import { IRepositoryInventario } from "./repository";


export class BBDD implements IRepositoryInventario {

    private stocs: any[] = [
        { name: "lampara", price: 600 },
        { name: "mesa", price: 500 }
    ]

	// ----- esta es nuestra "base de datos" -----
    constructor() {}

    getStock () {
        return this.stocs;
    }

}
