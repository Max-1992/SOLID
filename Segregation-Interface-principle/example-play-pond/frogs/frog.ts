import { IFloat } from '../interface/float.interface';
import { IJump } from '../interface/jump.interface';
import { IPlay } from '../play.interface';


export class Frog implements IPlay, IFloat, IJump {
    constructor() {}

    public float() {
        console.log('The frog is floating.');
    }

    public jump() {
        console.log('The frog is jumping.');
    }

    public play() {
        this.float();
        this.jump();
    }

}