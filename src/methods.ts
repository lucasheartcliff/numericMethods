interface NewthonRalphParameters {
  f: Function;
  df: Function;
  maxIterations: number;
  initialValue: number;
  toleranceValue: number;
}

export function newtonRalph({
  f,
  df,
  maxIterations,
  initialValue,
  toleranceValue
}: NewthonRalphParameters) {
  let result: null | number = initialValue;
  let index = 0;

  while (index <= maxIterations && Math.abs(f(result)) >= toleranceValue) {
    result = result - f(result) / (df(result) || 1);
    index++;
  }

  return { result, index };
}

interface BisectionParameters {
  f: Function;
  arr: number[];
  toleranceValue: number;
}

export function bisection({ f, arr, toleranceValue }: BisectionParameters) {
  let result = null;
  let [a, b] = arr;

  let index = 0;

  if (f(a) * f(b) < 0) {
    while (
      Math.abs(b - a) / 2 >= toleranceValue ||
      result === null ||
      f(result) !== 0
    ) {
      result = (a + b) / 2;
      if (result !== 0) {
        if (f(a) * f(result) < 0) {
          b = result;
        } else {
          a = result;
        }
      }
      index++;
    }
  }
  return { result, index };
}

interface FixedPointParameters {
  f: Function;
  df: Function;
  arr: number[];
  toleranceValue: number;
}

export function fixedPoint({
  f,
  df,
  arr,
  toleranceValue
}: FixedPointParameters) {
  let result = null;
  const [a, b] = arr;
  let index = 0;

  const average = (a + b) / 2;

  if (average <= toleranceValue || Math.abs(f(average)) <= toleranceValue)
    return { result: average, index };

  result = average;
  console.log("f", f(result));
  console.log("df", df(result));

  // debugger

  while (Math.abs(f(result)) > toleranceValue && result !== Infinity) {
    result = df(result);
    index++;
  }
  return { result, index };
}

interface SecantParameters {
  f: Function;
  arr: number[];
  toleranceValue: number;
}
export function secant({ f, arr, toleranceValue }: SecantParameters) {
  let result = null;
  let index = 0;

  let [a, b] = arr;

  while ((result ===null || f(result) > toleranceValue)) {
    result = (a * f(b) - b * f(a)) / (f(b) - f(a) || 1);
    a = b;
    b = result;
    index++;
  }

  return { result, index };
}
