import { IPlay } from './play.interface';

export class Pond {
    constructor() {}

    public sendToPlay(pondAnimal: IPlay) {
        return pondAnimal.play();
    }
}