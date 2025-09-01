function sumTwoSmallestNumbers(numbers) {  
   numbers.sort((num1,num2)=>num1-num2);
  return numbers[0]+numbers[1];
}