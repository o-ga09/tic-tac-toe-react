export class Board {
    constructor(
        readonly board: string[5][5]
    ){}
}

export class Koma {
    constructor(
        readonly turn: number,
        readonly x: number,
        readonly y: number,
    ){}
}