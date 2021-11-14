import { IInventario } from "../negocio/inventori.interface";
import { IRepositoryInventario } from "./repository";


export class InventarioBBDD implements IInventario {

    constructor(private respositoryInventario: IRepositoryInventario) {}

	// Metodo de consulta a la base de datos
	public numeroProductos(tienda: string, producto: string) {
		const inventario = this.respositoryInventario.getStock();
		return inventario.length;
	}
}
