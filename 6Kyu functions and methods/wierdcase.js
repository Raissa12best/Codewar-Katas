const toWeirdCase=(string)=>{
  return string
    .split(" ")                 
    .map(word => {
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
        newWord += (i % 2 === 0) 
          ? word[i].toUpperCase() 
          : word[i].toLowerCase();
      }
      return newWord;
    })
    .join(" ");           
}
