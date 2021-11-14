export class GeneradorPrimos {

	constructor() {}
	
	public primos (limit: number): number[] {
		let primos: number[] = [];
		for (let i = 2; i < limit; i++) {
			if (this.esPrimo(i)) {
			primos.push(i);
			}
		}

        const primosOrdenados = this.ordenar(primos);

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

    protected ordenar(numeros: number[]) {
        const numerosOrdenados = numeros.sort();
        return numerosOrdenados;
    }
}