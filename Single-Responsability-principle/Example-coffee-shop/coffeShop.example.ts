class CoffeShopExample {

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

    public addProductToCart(id: string, quantity: number) {
        // Logica para agregar un producto a un carrito.
    }

    public removeProductToCart(id: string, quantity: number) {
        // Logica para eliminar un producto a un carrito.
    }

    public getCartTotal() {
        // Logica paga generar el total a pagar del carrito.
    }

    public viewMenu() {
        // Logica para mostrar el menu.
    }
}