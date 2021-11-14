import { IShape } from "./interface/shape.interface";

export class Square implements IShape {
    constructor(private side: number) {}

    public area(): number {
        const area = this.side * this.side;
        return area; 
    }
}