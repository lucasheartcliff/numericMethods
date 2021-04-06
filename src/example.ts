export const newthonExample = {
  f: (x: number) => Math.pow(x, 3) - Math.cos(x),
  df: (x: number) => 3 * Math.pow(x, 2) + Math.sin(x),
  toleranceValue: Math.pow(10, -6),
  initialValue: 1.5,
  maxIterations: 3
};


export const bisectionExample = {
  f: (x: number) => x * Math.log10(x) - 1,
  arr: [2, 3],
  toleranceValue: Math.pow(10, -9)
};

export const fixedPointExample = {
  f: (x: number) => x * Math.pow(Math.E, x) - 2,
  df: (x: number) => Math.pow(Math.E, x) * x + Math.pow(Math.E, x),
  arr: [0, 1],
  toleranceValue: 0.04
};

export const secantExample = {
  f: (x: number) => Math.sqrt(x) - 5 * Math.pow(Math.E, x * -1),
  arr: [1.4, 1.5],
  toleranceValue: Math.pow(10, -2)
};
