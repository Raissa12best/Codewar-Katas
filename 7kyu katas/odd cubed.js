function cubeOdd(arr) {
  if (!arr.every(n => typeof n === 'number' && !Number.isNaN(n))) {
    return undefined; // return undefined if any element is not a number
  }

  return arr
    .map(n => n ** 3)         // cube each number
    .filter(n => n % 2 !== 0) // keep only odd cubes
    .reduce((sum, n) => sum + n, 0); // sum them up
}