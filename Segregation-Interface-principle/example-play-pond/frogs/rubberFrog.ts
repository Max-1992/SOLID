import { IFloat } from '../interface/float.interface';
import { IJump } from '../interface/jump.interface';
import { IPlay } from '../play.interface';


export class RubberFrog implements IPlay, IFloat {
    constructor() {}

    public float() {
        console.log('The rubberfrog is floating.');
    }

    public play() {
        this.float();
    }

}