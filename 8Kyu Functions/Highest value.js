function twoHighest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique.slice(0, 2);
}