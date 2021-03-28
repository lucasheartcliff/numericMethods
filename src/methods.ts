export function newtonRalph(
    f:Function,
    df: Function,
    maxIterations:number,
    inicialApproach:number,
    toleranceValue:number
) {
    let result:null | number = null;
    let index = 0;

    while (index <= maxIterations && Math.abs(f(result || inicialApproach)) >= toleranceValue) {
        result = result - f(result) / (df(result) || 1);
        index++;
    }

    return { result, index };
};

export function bisection(f:Function, arr:number[], toleranceValue:number) {
    let result = null
    let [a, b] = arr

    let index = 0

    if ((f(a) * f(b)) < 0) {
        while (Math.abs(b - a) / 2 >= toleranceValue || result === null || f(result) !== 0) {
            result = (a + b) / 2
            if (result !== 0) {
                if ((f(a) * f(result)) < 0) {
                    b = result
                } else {
                    a = result
                }
            }
            index++
        }
    }
    return { result, index }
}

export function fixedPoint(f:Function, df:Function, arr:number[], maxIterations:number, toleranceValue:number) {
    let result = null
    const [a, b] = arr
    let index = 0

    const average = (a + b) / 2

    if (average <= toleranceValue || Math.abs(f(average)) <= toleranceValue) return { result: average, index }

    result = average

    while (index <= maxIterations) {
        const dAverage = df(result)
        const fDAverage = f(dAverage)

        if (Math.abs(fDAverage) <= toleranceValue) break;

        result = dAverage
        index++
    }
    return { result, index }
}

export function secant(f:Function, arr:number[], maxIterations:number) {
    let result = null
    let index = 0

    let [a, b] = arr

    while (index <= maxIterations) {
        result = ((a * f(b)) - (b * f(a))) / ((f(b) - f(a)) || 1)
        a = b
        b = result
        index++
    }

    return { result, index }
}