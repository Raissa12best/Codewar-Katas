function findUnique(arr) {
  let result = 0;
  
  for (let num of arr) {
    result ^= num;
  }
  
  return result;
}