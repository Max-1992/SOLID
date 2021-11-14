export class CoffeShop {

    protected products = [];

    constructor() {}

    public addProduct(products: any[]) {
        this.products = products;
    }

    public getProduct() {
        return this.products;
    }

    public removeProduct(id: string) {
        // Logica para borrar un producto.
    }

}