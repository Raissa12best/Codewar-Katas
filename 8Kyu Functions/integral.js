function integrate(coefficient, exponent) {
  const newExp = exponent + 1;
  const newCoeff = coefficient / newExp;
  return `${newCoeff}x^${newExp}`;
}