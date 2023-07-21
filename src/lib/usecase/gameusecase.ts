import { Koma } from "../domain/entity";
import { GameOutPutPort } from "./port/outputPort";

export class GameUseCase {
    constructor(readonly gameoutputport: GameOutPutPort){}

    input(index: number) {
        const res = this.convert(index);
        return new Koma(1,res.x,res.y);
    }

    convert(index: number):InputData {
        if(index >= 0 && index <= 4) {
            return new InputData(0,index);
        } else if(index >= 5 && index <= 9 ) {
            return new InputData(1,index);
        } else if(index >= 10 && index <= 14) {
            return new InputData(2,index);
        } else if(index >= 15 && index <= 19) {
            return new InputData(3,index);
        } else if(index >= 20 && index <= 24) {
            return new InputData(4,index);
        } else {
            return new InputData(-1,-1);
        }
    }
}

class InputData {
    constructor(
        readonly x: number,
        readonly y: number,
    ){}
}