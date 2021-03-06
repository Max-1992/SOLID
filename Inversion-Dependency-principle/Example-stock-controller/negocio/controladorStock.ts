import { IInventario } from "./inventori.interface";


export class ControladorEstoc {
	
	public constructor(private inventario: IInventario) {}

	/**
	 * Nuestros sesudos estudios han descubierto que los clientes compran mas
	 * productos cuando el nombre de este producto es mas largo
	 * Por eso, el estoc no puede ser inferior a 100 * la longitud del nombre del producto
	 * p.e: necesitamos al menos 400 mesas (mesa : 4 letras) y
	 *    al menos 700 lamparas (lampara: 7 letras)
	 */
	public necesitaReponer (tienda: string, producto: string) {

		const cantidadActual = this.inventario.numeroProductos(tienda, producto);
		
		return  cantidadActual < producto.length * 100;
	}

}
