function validate(n) {

  const digits = String(n).split('').map(Number);
  const len = digits.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    let digit = digits[i];

    if ((len % 2 === 0 && i % 2 === 0) || (len % 2 === 1 && i % 2 === 1)) {
      digit *= 2;
      if (digit > 9) digit -= 9; 
    }

    sum += digit; 
  }
  return sum % 10 === 0;
}