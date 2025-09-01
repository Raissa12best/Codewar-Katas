function checkVowel(string, position) {
  
  if(position<0 || position >= string.length)return false;
    
  const char=string[position].toLowerCase();
  return 'aeiou'.includes(char);
};