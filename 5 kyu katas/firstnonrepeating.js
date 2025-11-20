function firstNonRepeatingLetter(s) {
 const lower=s.toLowerCase();
 for(let i=0;i<s.length;i++){
     if(lower.indexOf(lower[i])=== lower.lastIndexOf(lower[i])){
         return s[i];
     }
 }
 return "";

}