import { GeneradorPrimos } from "../generadorPrimos";

export class GeneradorPrimosOrdenAscendente extends GeneradorPrimos {

    constructor() {
        super()
    }

    protected ordenar(numeros: number[]) {
        const numerosOrdenados = numeros.sort((a, b) => a - b);
        return numerosOrdenados;
    }

}