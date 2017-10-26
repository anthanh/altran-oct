var calc = {
  NAN: 'NaN',
  suma: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return calc.NAN;
    }
    return a + b;
  },
  resta: (a, b) => a,
  multi: (a, b) => a
};
module.exports = calc;
