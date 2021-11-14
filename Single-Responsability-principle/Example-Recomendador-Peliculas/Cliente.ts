import { Pelicula } from "./Pelicula";

export class Cliente {
 
	private nombre: string;
	private favoritas: Pelicula[];
	
	 constructor(nombre: string, favoritas: Pelicula[]) {
		this.nombre = nombre;
		this.favoritas = favoritas;
	}

	public getNombre(): string {
		return this.nombre;
	}

	public getFavoritas(): Pelicula[]  {
		return this.favoritas;
	}
	
	
}
