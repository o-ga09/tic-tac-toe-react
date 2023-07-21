import { when } from "jest-when";
import { Koma } from "../../domain/entity";
import { GameUseCase } from "../gameusecase";
import { GameOutPutPort } from "../port/outputPort";

describe("ユースケースのテスト", () => {
    test("入力を受け取る", () => {
        const outputport = {} as GameOutPutPort;
        const displayMock = jest.fn();
        outputport.display = displayMock;
        when(displayMock).calledWith().mockReturnValueOnce(null);
        const usecase = new GameUseCase(outputport);
        const actual = usecase.input(1);
        const expected = new Koma(1,0,1);
        expect(actual).toEqual(expected);
    });
});