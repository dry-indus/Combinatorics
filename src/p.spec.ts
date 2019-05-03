
import { P } from "./combination"

describe('test P', function () {
    it('[3, 2] should equal 6', function () {
        expect(P(3, 2)).toEqual(6)
    });

    it('[3, 3] should equal 6', function () {
        expect(P(3, 3)).toEqual(6)
    });

    it('[1, 1] should equal 1', function () {
        expect(P(1, 1)).toEqual(1)
    });

    it('[2, 5] should equal 0', function () {
        expect(P(2, 5)).toEqual(0)
    });

    it('[3.3, 2] should equal 6', function () {
        expect(P(3.3, 2)).toEqual(6)
    });

    it('[3.3, 2.2] should equal 6', function () {
        expect(P(3.3, 2.2)).toEqual(6)
    });

    it('[3, 2.2] should equal 6', function () {
        expect(P(3, 2.2)).toEqual(6)
    });
});
