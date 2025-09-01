function XO(str) {
  str= str.toLowerCase();
    
    return str.split('').filter((char)=> char=='o').length== str.split('').filter((char)=> char=='x').length? true :false
}