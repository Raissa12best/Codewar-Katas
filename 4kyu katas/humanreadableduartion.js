function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return "1";
  
  let result = [1];
  
  for (let num = 2; num <= n; num++) {
    let carriedNum = 0;
    
    for (let i = 0; i < result.length; i++) {
      let product = result[i] * num + carriedNum;
      result[i] = product % 10;
      carriedNum = Math.floor(product / 10);
    }
    
    while (carriedNum > 0) {
      result.push(carriedNum % 10);
      carriedNum = Math.floor(carriedNum / 10);
    }
  }
  
  return result.reverse().join('');
}