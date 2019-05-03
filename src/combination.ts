export const P = function (m: number, n: number) {
    n % 1 !== 0 && (n = Math.floor(n))
    m % 1 !== 0 && (m = Math.floor(m))
    let p = 1
    while (n--) {
        p *= m--
    }
    return p
}

export const C = function (m: number, n: number) {
    if (n > m) {
        return 0;
    }
    return P(m, n) / P(n, n);
}

interface IndexesInteface {
    pickFrom<E>(ary: E[]): E[]
    omitFrom<E>(ary: E[]): E[]
}

abstract class AbstractIndexes<T> implements IndexesInteface {
    constructor(
        protected m: number,
        protected indexes: T
    ) { }

    pickFrom<E>(ary: E[]): E[] {
        if (this.m > ary.length) {
            throw new RangeError
        }
        let result: E[] = []
        this.forIndex(this.indexes, (e, i) => e && (result[result.length] = ary[i]))
        return result
    }

    omitFrom<E>(ary: E[]): E[] {
        if (this.m > ary.length) {
            throw new RangeError
        }
        let result: E[] = []
        this.forIndex(this.negateIndexes(), (e, i) => e && (result[result.length] = ary[i]))
        return result
    }

    protected abstract negateIndexes(): T
    protected abstract forIndex(indexes: T, callback: (enable: boolean, index: number) => void): void
}

abstract class AbstractCombination<T> implements IterableIterator<T> {
    readonly count: number = 0

    constructor(
        readonly m: number,
        readonly r: number
    ) { this.count = C(m, r) }

    isValid(): boolean {
        return 0 < this.r && this.m >= this.r
    }

    abstract next(): IteratorResult<T>

    [Symbol.iterator](): IterableIterator<T> {
        return this;
    }
}

class Indexes30 extends AbstractIndexes<number> {
    constructor(m: number, indexes: number) {
        super(m, indexes)
    }

    protected negateIndexes(): number {
        const max = (1 << this.m) - 1
        return max ^ this.indexes
    }

    forIndex(indexes: number, callback: (enable: boolean, index: number) => void): void {
        let i = 0
        for (let n = indexes; n; n >>>= 1, i++) {
            callback(Boolean(n & 1), i)
        }
    }
}

export class Combination30 extends AbstractCombination<Indexes30> {
    private readonly maxIndex: number
    private indexes: number

    constructor(m: number, r: number) {
        super(m, r)
        this.maxIndex = 1 << m
        this.indexes = this.isValid() ? (1 << r) - 1 : this.maxIndex
    }

    next(): IteratorResult<Indexes30> {
        const done = this.indexes >= this.maxIndex
        const picker: Indexes30 = new Indexes30(this.m, done ? 0 : this.indexes)
        this.indexes = Combination30.nextIndex_30bit(this.indexes);
        return { done, value: picker }
    }

    isValid(): boolean {
        return super.isValid() && 31 > this.m
    }

    private static nextIndex_30bit = function (ind: number): number {
        var smallest = ind & -ind,
            ripple = ind + smallest,
            newSmallest = ripple & -ripple,
            ones = ((newSmallest / smallest) >> 1) - 1;
        return ripple | ones;
    };
}

class IndexesBig extends AbstractIndexes<number[]> {
    constructor(m: number, indexes: number[]) {
        super(m, indexes)
    }

    protected negateIndexes(): number[] {
        let preCount = this.m - this.indexes.length
        const negate = this.indexes.map(i => +!i)
        return negate.concat(Array(preCount).fill(1))
    }

    forIndex(indexes: number[], callback: (enable: boolean, index: number) => void) {
        const length = indexes.length
        for (let i = 0; i < length; i++) {
            callback(Boolean(indexes[i]), i)
        }
    }
}

export class CombinationBig extends AbstractCombination<IndexesBig> {
    private indexes: number[]

    constructor(m: number, r: number) {
        super(m, r)
        this.indexes = this.isValid() ? Array(r).fill(1) : Array(m + 1)
    }

    next(): IteratorResult<IndexesBig> {
        const done = this.m < this.indexes.length
        const index = new IndexesBig(this.m, done ? [] : this.indexes.slice())
        this.indexes = CombinationBig.nextIndex_30bit(this.indexes, this.r);
        return { done, value: index }
    }

    static nextIndex_30bit = function (indexes: number[], nelem: number): number[] {
        let result = indexes;
        let j = nelem;
        for (let i = result.length - 1; i >= 0; i--) {
            if (result[i] == 1) {
                j--;
            } else {
                break;
            }
        }
        if (j == 0) {
            // Overflow
            result[result.length] = 1;
            for (let k = result.length - 2; k >= 0; k--) {
                result[k] = (k < nelem - 1) ? 1 : 0;
            }
        } else {
            // Normal
            // first zero after 1
            let i1 = -1;
            let i0 = -1;
            for (let i = 0; i < result.length; i++) {
                if (result[i] == 0 && i1 != -1) {
                    i0 = i;
                }
                else if (result[i] == 1) {
                    i1 = i;
                }

                if (i0 != -1 && i1 != -1) {
                    result[i0] = 1;
                    result[i1] = 0;
                    break;
                }
            }

            j = nelem;
            for (let i = result.length - 1; i >= i1; i--) {
                if (result[i] == 1) {
                    j--;
                }
            }
            for (let i = 0; i < i1; i++) {
                result[i] = i < j ? 1 : 0;
            }
        }
        return result;
    };
}

export const Combination = function (m: number, r: number): AbstractCombination<IndexesInteface> {
    return 31 > m ? new Combination30(m, r) : new CombinationBig(m, r)
}
