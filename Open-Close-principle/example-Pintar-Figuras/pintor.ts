import { Figura } from "./interface/figura.interface";

export class Pintor {
    constructor(private figuras: Figura[]) {
        this.figuras.forEach(figura => figura.pintar())
    }
}