import { GeneradorPrimos } from "../generadorPrimos";

export class GeneradorPrimosOrdenDescendentes extends GeneradorPrimos {

    constructor() {
        super()
    }

    protected ordenar(numeros: number[]) {
        const numerosOrdenados = numeros.sort((a, b) => b - a);
        return numerosOrdenados;
    }

}