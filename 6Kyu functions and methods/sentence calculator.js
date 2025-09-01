function lettersToNumbers(s) {
  let sum=0;
  for(let char of s){
    if(char>='a'&& char<='z'){
     sum+=char.charCodeAt(0)-'a'.charCodeAt(0)+1; 
    }
    else if(char>='A' && char<='Z'){ 
      sum+=2*(char.charCodeAt(0)-'A'.charCodeAt(0)+1);
    } else if (char>='0'&& char<='9'){
      sum+=parseInt(char);
    }
    else{
      sum+=0;
    }
     }
  return sum;
}