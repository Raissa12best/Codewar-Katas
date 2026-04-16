function maxTriSum(numbers) {

  const unique = [...new Set(numbers)];

  unique.sort((a, b) => b - a);

  return unique.slice(0, 3).reduce((sum, num) => sum + num, 0);
}