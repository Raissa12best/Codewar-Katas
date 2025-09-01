function solve(a) {
  let even = 0;
  let odd = 0;

  for (let val of a) {
    if (typeof val === 'number' && Number.isFinite(val)) {
      if (val % 2 === 0) {
        even++;
      } else if (val % 2 !== 0) {
        odd++;
      }
    }
  }

  return even - odd;
}
