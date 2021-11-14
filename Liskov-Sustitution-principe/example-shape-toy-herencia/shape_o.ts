import { Shape } from './shape';

export class ShapeToy {
    constructor() {}

    insert(shape: Shape, , hole: number): boolean {
        const shapeArea = shape.area();
        const result = (shapeArea < hole) ? true : false;
        return result;
    }
}