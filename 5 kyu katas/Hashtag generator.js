function generateHashtag (str) {
  if(!str.trim())return false;//removes extra spaces on both ends of the words
  const words = str.trim().split(/\s+/)// splits by any number of spaces whether double or triple
  .map(word=>word[0].toUpperCase()+word.slice(1).toLowerCase());// makes every first letter to uppercase then the rest to  lower case 
  const hashtag='#'+words.join('');// joining the words together without spaces
   
  return hashtag.length>140?false:hashtag;// checks if the length exceeds 140 then returns false or else the hashtag
}