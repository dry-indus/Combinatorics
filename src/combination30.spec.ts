import { Combination30 } from "./combination"

describe('test Combination30', () => {
    test('6 pick or omit 1', () => {
        const a = 'abcdef'.split('')
        const comb = new Combination30(a.length, 1)
        let pickRet = []
        let omitRet = []
        for (let i of comb) {
            pickRet.push(i.pickFrom(a))
            omitRet.push(i.omitFrom(a))
        }

        expect(JSON.stringify(pickRet)).toEqual(JSON.stringify([
            ["a"],
            ["b"],
            ["c"],
            ["d"],
            ["e"],
            ["f"]
        ]))

        expect(pickRet.length).toEqual(comb.count);

        expect(JSON.stringify(omitRet)).toEqual(JSON.stringify([
            ["b", "c", "d", "e", "f"],
            ["a", "c", "d", "e", "f"],
            ["a", "b", "d", "e", "f"],
            ["a", "b", "c", "e", "f"],
            ["a", "b", "c", "d", "f"],
            ["a", "b", "c", "d", "e"],
        ]))

        expect(omitRet.length).toEqual(comb.count);
    })

    test('6 pick or omit 2', () => {
        const a = 'abcdef'.split('')
        const comb = new Combination30(a.length, 2)
        let pickRet = []
        let omitRet = []
        for (let i of comb) {
            pickRet.push(i.pickFrom(a))
            omitRet.push(i.omitFrom(a))
        }

        expect(JSON.stringify(pickRet)).toEqual(JSON.stringify([
            ["a", "b"],
            ["a", "c"],
            ["b", "c"],
            ["a", "d"],
            ["b", "d"],
            ["c", "d"],
            ["a", "e"],
            ["b", "e"],
            ["c", "e"],
            ["d", "e"],
            ["a", "f"],
            ["b", "f"],
            ["c", "f"],
            ["d", "f"],
            ["e", "f"]
        ]))

        expect(pickRet.length).toEqual(comb.count);

        expect(JSON.stringify(omitRet)).toEqual(JSON.stringify([
            ["c", "d", "e", "f"],
            ["b", "d", "e", "f"],
            ["a", "d", "e", "f"],
            ["b", "c", "e", "f"],
            ["a", "c", "e", "f"],
            ["a", "b", "e", "f"],
            ["b", "c", "d", "f"],
            ["a", "c", "d", "f"],
            ["a", "b", "d", "f"],
            ["a", "b", "c", "f"],
            ["b", "c", "d", "e"],
            ["a", "c", "d", "e"],
            ["a", "b", "d", "e"],
            ["a", "b", "c", "e"],
            ["a", "b", "c", "d"]
        ]))

        expect(omitRet.length).toEqual(comb.count);
    })
    test('6 pick or omit 3', () => {
        const a = 'abcdef'.split('')
        const comb = new Combination30(a.length, 3)
        let pickRet = []
        let omitRet = []
        for (let i of comb) {
            pickRet.push(i.pickFrom(a))
            omitRet.push(i.omitFrom(a))
        }

        expect(JSON.stringify(pickRet)).toEqual(JSON.stringify([
            ["a", "b", "c"],
            ["a", "b", "d"],
            ["a", "c", "d"],
            ["b", "c", "d"],
            ["a", "b", "e"],
            ["a", "c", "e"],
            ["b", "c", "e"],
            ["a", "d", "e"],
            ["b", "d", "e"],
            ["c", "d", "e"],
            ["a", "b", "f"],
            ["a", "c", "f"],
            ["b", "c", "f"],
            ["a", "d", "f"],
            ["b", "d", "f"],
            ["c", "d", "f"],
            ["a", "e", "f"],
            ["b", "e", "f"],
            ["c", "e", "f"],
            ["d", "e", "f"]
        ]))

        expect(pickRet.length).toEqual(comb.count);

        expect(JSON.stringify(omitRet)).toEqual(JSON.stringify([
            ["d", "e", "f"],
            ["c", "e", "f"],
            ["b", "e", "f"],
            ["a", "e", "f"],
            ["c", "d", "f"],
            ["b", "d", "f"],
            ["a", "d", "f"],
            ["b", "c", "f"],
            ["a", "c", "f"],
            ["a", "b", "f"],
            ["c", "d", "e"],
            ["b", "d", "e"],
            ["a", "d", "e"],
            ["b", "c", "e"],
            ["a", "c", "e"],
            ["a", "b", "e"],
            ["b", "c", "d"],
            ["a", "c", "d"],
            ["a", "b", "d"],
            ["a", "b", "c"],
        ]))

        expect(omitRet.length).toEqual(comb.count);
    })
    test('6 pick or omit 4', () => {
        const a = 'abcdef'.split('')
        const comb = new Combination30(a.length, 4)
        let pickRet = []
        let omitRet = []
        for (let i of comb) {
            pickRet.push(i.pickFrom(a))
            omitRet.push(i.omitFrom(a))
        }
        expect(JSON.stringify(pickRet)).toEqual(JSON.stringify([
            ["a", "b", "c", "d"],
            ["a", "b", "c", "e"],
            ["a", "b", "d", "e"],
            ["a", "c", "d", "e"],
            ["b", "c", "d", "e"],
            ["a", "b", "c", "f"],
            ["a", "b", "d", "f"],
            ["a", "c", "d", "f"],
            ["b", "c", "d", "f"],
            ["a", "b", "e", "f"],
            ["a", "c", "e", "f"],
            ["b", "c", "e", "f"],
            ["a", "d", "e", "f"],
            ["b", "d", "e", "f"],
            ["c", "d", "e", "f"]
        ]))

        expect(pickRet.length).toEqual(comb.count);

        expect(JSON.stringify(omitRet)).toEqual(JSON.stringify([
            ["e", "f"],
            ["d", "f"],
            ["c", "f"],
            ["b", "f"],
            ["a", "f"],
            ["d", "e"],
            ["c", "e"],
            ["b", "e"],
            ["a", "e"],
            ["c", "d"],
            ["b", "d"],
            ["a", "d"],
            ["b", "c"],
            ["a", "c"],
            ["a", "b"],
        ]))

        expect(omitRet.length).toEqual(comb.count);
    })
    test('6 pick or omit 5', () => {
        const a = 'abcdef'.split('')
        const comb = new Combination30(a.length, 5)
        let pickRet = []
        let omitRet = []
        for (let i of comb) {
            pickRet.push(i.pickFrom(a))
            omitRet.push(i.omitFrom(a))
        }
        expect(JSON.stringify(pickRet)).toEqual(JSON.stringify([
            ["a", "b", "c", "d", "e"],
            ["a", "b", "c", "d", "f"],
            ["a", "b", "c", "e", "f"],
            ["a", "b", "d", "e", "f"],
            ["a", "c", "d", "e", "f"],
            ["b", "c", "d", "e", "f"]
        ]))

        expect(pickRet.length).toEqual(comb.count);

        expect(JSON.stringify(omitRet)).toEqual(JSON.stringify([
            ["f"],
            ["e"],
            ["d"],
            ["c"],
            ["b"],
            ["a"],
        ]))
        expect(omitRet.length).toEqual(comb.count);

    })

    test('6 pick or omit 6', () => {
        const a = 'abcdef'.split('')
        const comb = new Combination30(a.length, 6)
        let pickRet = []
        let omitRet = []
        for (let i of comb) {
            pickRet.push(i.pickFrom(a))
            omitRet.push(i.omitFrom(a))
        }
        expect(JSON.stringify(pickRet)).toEqual(JSON.stringify([
            ["a", "b", "c", "d", "e", "f"]
        ]))

        expect(pickRet.length).toEqual(comb.count);

        expect(JSON.stringify(omitRet)).toEqual(JSON.stringify([
            []
        ]))

        expect(omitRet.length).toEqual(comb.count);
    })

    test('30 pick 15', () => {
        const a = new Array(30).fill(1)
        const comb = new Combination30(a.length, 15)
        let sum = 0
        for (let i of comb) {
            sum++
        }
        expect(sum).toBe(comb.count);
    })

    test('31 pick 1', () => {
        const a = new Array(31).fill(1)
        const comb = new Combination30(a.length, 15)
        let sum = 0
        for (let i of comb) {
            sum++
        }
        expect(sum).toBe(0);
    })

    test('5 pick 10', () => {
        const comb = new Combination30(5, 10)
        let sum = 0
        for (let i of comb) {
            sum++
        }
        expect(sum).toBe(0);
    })

    test('error pick or omit', () => {
        const a = 'abcdef'.split('')
        const comb = new Combination30(7, 2)
        for (let i of comb) {
            expect(() => i.pickFrom(a)).toThrowError(new RangeError)
            expect(() => i.omitFrom(a)).toThrowError(new RangeError)
        }
    })
})
