class MenuExample {
    constructor() {}

    public view(products: any[], json: boolean, txt: boolean, html: boolean) {
        // Logica para mostrar el menu.
        if(json) {
            return JSON.stringify(products);
        }

        if(txt) {
            return products.toLocaleString()
        }

        if(html) {
            return `<p>El menu es: ${products}</p>`
        }
        
        console.log('El menu es: ', products)
    }
}