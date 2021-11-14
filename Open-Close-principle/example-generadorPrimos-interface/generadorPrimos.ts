import { IGeneradorPrimos } from './inteface/GeneradorPrimos.interface'
import { Ordenamiento } from './inteface/ordenamiento.inteface';

export class GeneradorPrimos implements IGeneradorPrimos {

	constructor(private ordenamiento: Ordenamiento) {}
	
	public primos (limit: number): number[] {
		let primos: number[] = [];
		for (let i = 2; i < limit; i++) {
			if (this.esPrimo(i)) {
			primos.push(i);
			}
		}

        const primosOrdenados = this.ordenamiento.ordenar(primos);
		return primosOrdenados;
	}
	
	private esPrimo (candidato: number): boolean {
		for (let i = 2; i < candidato; i++) {
			if (candidato % i == 0) {
				return false;
			}
		}
		return true;
	}

}