function pigIt(str){
  function pigIt(str) {
  return str
    .split(' ')
    .map(word => {
    
      if (/^[!?.,;:]$/.test(word)) {// tests if the word is one character long and includes the tags and if yes return the word
        return word;
      }

      return word.slice(1) + word[0] + 'ay';
    })
    .join(' ');
}
return pigIt(str);

}

console.log(pigIt("this is cool"));