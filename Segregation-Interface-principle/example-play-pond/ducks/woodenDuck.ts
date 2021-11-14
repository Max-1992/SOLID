import { IFloat } from '../interface/float.interface';
import { IPlay } from '../play.interface';

export class WoondenDuck implements IFloat, IPlay {
    constructor() {}

    public float() {
        console.log('The woondenduck is floating.');
    }

    public play() {
        this.float();
    }

}