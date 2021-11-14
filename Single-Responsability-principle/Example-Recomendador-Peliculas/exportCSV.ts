import { Pelicula } from "./Pelicula";

export class exportCSV {
    constructor() {}

    public recomendacionesCSV(peliculas: Pelicula[]): string {
		const recomendaciones: string[] = peliculas.map(pelicula => `Titulo: ${pelicula.getTitulo()} - Director: ${ pelicula.getDirector() } - Genero: ${pelicula.getGenero()}`);
		return recomendaciones.join("\n");
	}
}