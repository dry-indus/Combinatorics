import { Combination, Combination30, CombinationBig } from "./combination"

describe('test Combination', () => {
    test('test Combination runtime type', () => {
        const isCombination30 = (Combination(30, 1) instanceof Combination30)
        expect(isCombination30).toEqual(true)
        const isCombinationBig = (Combination(31, 1) instanceof CombinationBig)
        expect(isCombinationBig).toEqual(true)
    })
})