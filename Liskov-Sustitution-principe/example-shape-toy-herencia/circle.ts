import { Shape } from "../example-shape-toy-herencia/shape";

export class Square extends Shape {
    constructor(private radio: number) {
        super()
    }

    public area(): number {
        const area = Math.PI * Math.pow(this.radio, 2);
        return area; 
    }
}