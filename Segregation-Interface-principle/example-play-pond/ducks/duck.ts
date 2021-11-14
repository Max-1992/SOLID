import { IFloat } from '../interface/float.interface';
import { IQuack } from '../interface/quack.interface';
import { IPlay } from '../play.interface';


export class Duck implements IQuack, IFloat, IPlay {
    constructor() {}

    public quack() {
        console.log('The duck is quacking.');
    }

    public float() {
        console.log('The duck is floating.');
    }

    public play() {
        this.float();
        this.quack();
    }

}