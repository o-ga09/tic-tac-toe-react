import { Board } from "../../lib/domain/entity";

export class GameState {
    board: number[][] = [];

    setBoard(b: Board) {
        this.board = b.board;
    }
}