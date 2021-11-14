import { Cart } from './cart';
import { Menu } from './menu/menu';
import { CoffeShop } from './coffeShop';
import { JsonMenuOutput } from './menu/jsonMenuOutput'

const productsToAdd: any[] = [
    { id: 1, name: 'Bonafide'}, 
    { id: 2, name: 'La virginia'}, 
    {id: 3, name: 'NesCafe'}
];

const coffeShop = new CoffeShop();
coffeShop.addProduct(productsToAdd);
const products = coffeShop.getProduct()

const cart = new Cart();
cart.addProduct(products[0], 25);

const menuOutput = new JsonMenuOutput();

const menu = new Menu(menuOutput);
menu.view(products)




