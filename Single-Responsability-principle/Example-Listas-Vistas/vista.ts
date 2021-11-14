import { Service } from './service';

export class Vista {

    private servicio: Service;

    constructor(private service: Service) {
        this.servicio = this.service;
    }

    public lista (): string {
		const clientes: string[] = this.servicio.listaClientes();
		return clientes.join(", ");
	}
	
	public report () {
		return "Report :\n" + this.lista();
	}

}
