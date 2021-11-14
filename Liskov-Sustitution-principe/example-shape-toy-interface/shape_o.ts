import { IShape } from './interface/shape.interface'

export class ShapeToy {
    constructor() {}

    insert(shape: IShape, , hole: number): boolean {
        const shapeArea = shape.area();
        const result = (shapeArea < hole) ? true : false;
        return result;
    }
}