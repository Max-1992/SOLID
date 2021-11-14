import { Ordenamiento } from '../inteface/ordenamiento.inteface';

export class GeneradorPrimosOrdenAscendente implements Ordenamiento {

    constructor() {}

    public ordenar(numeros: number[]): number[] {
        const numerosOrdenados = numeros.sort((a, b) => b - a);
        return numerosOrdenados;
    }

}