function validPhoneNumber(phoneNumber){
 
  const isDigit = c => c >= '0' && c <= '9';
  return phoneNumber.length === 14 &&
    phoneNumber[0] === '(' &&
    isDigit(phoneNumber[1]) && isDigit(phoneNumber[2])&& isDigit(phoneNumber[3]) &&
    phoneNumber[4] === ')' &&
    phoneNumber[5] === ' ' &&
    isDigit(phoneNumber[6]) && isDigit(phoneNumber[7]) && isDigit(phoneNumber[8]) &&
    phoneNumber[9] === '-' &&
    isDigit(phoneNumber[10]) && isDigit(phoneNumber[11]) && isDigit(phoneNumber[12]) && isDigit(phoneNumber[13]);
}
// or use regular expressions
function validPhoneNumber(phoneNumber){
  const regex = /^\(\d{3}\) \d{3}-\d{4}$/;// regular expressions 
  return regex.test(phoneNumber);
}