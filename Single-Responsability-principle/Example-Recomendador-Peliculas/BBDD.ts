import { Cliente } from "./Cliente";
import { Pelicula } from "./Pelicula";

export class BBDD {

	// GENEROS
	public static GENERO_FANTASTICO: string = "fantastica";
	public static GENERO_BELICO: string = "belico";

	// DIRECTORES
	public static DIRECTOR_SPIELBERG: string = "Spielberg";
	
	// PELICULAS
	public static ET: Pelicula = new Pelicula("ET", BBDD.GENERO_FANTASTICO, BBDD.DIRECTOR_SPIELBERG);
	public static SOLDADO_RYAN: Pelicula = new Pelicula("Salvar al soldado Ryan", BBDD.GENERO_BELICO, BBDD.DIRECTOR_SPIELBERG);
	public static TODAS: Pelicula[] = [BBDD.ET, BBDD.SOLDADO_RYAN];
	
	// CLIENTE
	public static JUAN: Cliente = new Cliente("Juan", [BBDD.ET]);

	// METHODS
	public static PELIS_POR_DIRECTOR (): Pelicula[] {
		return this.TODAS;
	}		
	
}
