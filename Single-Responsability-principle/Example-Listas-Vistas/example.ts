/*
    Single Responsibility Principle - Ejercicio de codificación.

    Éste es un ejercicio muy sencillo para familiarizarnos con el sistema de ejercicios de codificación.

    Uno de los casos más frecuentes de violación del principio SRP es mezclar lógica de negocio con lógica de presentación. La clase Service tiene este problema.
    De los dos métodos de Service ( listaClientes y lista ) solo debe quedar el primero. El segundo indica cómo se representa la lista en un texto.
    Esta funcionalidad que debéis eliminar de Service, debe quedar en View. View es la clase que se encarga de construir la representación textual de la lista de clientes.

    Por tanto los pasos que debéis realizar son:
        1. Dejar la clase Service con un único método : listaClientes.
        2. Mover la funcionalidad que habéis quitado de Servicio a Vista para que siga funcionando.

    Observad que no debéis realizar ningún cambio en Servicio.listaClientes y que Vista debe seguir conservando el método report. 
*/

// Service.ts
export class Service {

	public listaClientes (): string[] {
        return ["Primero", "Segundo", "Tercero"];
    }
	
	public lista (): string {
		const clientes: string[] = this.listaClientes();
		return clientes.join(", ");
	}
	
}


// Vista.ts
export class Vista {

    private servicio: Service;

    constructor(private service: Service) {}
	
	public Vista (service: Service) {
		this.servicio = this.service;
	}
	
	public report () {
		return "Report :\n" + this.servicio.lista();
	}

}