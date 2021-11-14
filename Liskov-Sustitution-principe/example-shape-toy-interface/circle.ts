import { IShape } from "./interface/shape.interface";

export class Square implements IShape {
    constructor(private radio: number) {}

    public area(): number {
        const area = Math.PI * Math.pow(this.radio, 2);
        return area; 
    }
}