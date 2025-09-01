function shiftLeft(s, t){
 
 
  let i = s.length - 1;//last char index of the string s
  let j = t.length - 1;//last char index of the string t

  
  while (i >= 0 && j >= 0 && s[i] === t[j]) {// find longest common char at the end of astring
    i--;
    j--;
  }

  return (i + 1) + (j + 1);// numbers of characters to delete
  
}