function squareDigits(num){
  return Number(num.toString().split('').map(n => Number(n)**2).join(''));
}