import { BBDD } from "./BBDD";
import { Cliente } from "./Cliente";
import { Pelicula } from "./Pelicula";

export class Recomendador {

	constructor() {}

	public recomendaciones(cliente: Cliente): Pelicula[] {
		const recomendadas: Pelicula[] = [];
		const favoritas: Pelicula[] = cliente.getFavoritas();

		favoritas.forEach(pelicula => {
			const seleccionarPelicula = BBDD.PELIS_POR_DIRECTOR[pelicula.getDirector()];
			recomendadas.push(seleccionarPelicula);
		});

		return recomendadas;
	}
	
}
