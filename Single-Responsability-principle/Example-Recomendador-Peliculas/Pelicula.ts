export class Pelicula {

	private titulo: string;
	private genero: string;
	private director: string;
	
	constructor( titulo: string,  genero: string,  director: string) {
		this.titulo = titulo;
		this.genero = genero;
		this.director = director;
	}

	public getTitulo(): string {
		return this.titulo;
	}

	public getGenero(): string {
		return this.genero;
	}

	public getDirector(): string {
		return this.director;
	}

	public toString() {
		return "Pelicula [titulo=" + this.titulo + ", genero=" + this.genero + ", director=" + this.director + "]";
	}
	
	
}
