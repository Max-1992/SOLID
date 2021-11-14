import { Shape } from "./shape";


export class Square extends Shape {
    constructor(private side: number) {
        super()
    }

    public area(): number {
        const area = this.side * this.side;
        return area; 
    }
}

