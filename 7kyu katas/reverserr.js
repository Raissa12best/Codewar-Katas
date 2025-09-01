function esrever(str) {
  
  let punctuation = "";
  if (/[?!.,]$/.test(str)) {
    punctuation = str.slice(-1); 
    str = str.slice(0, -1);      
  }

  return str.split("").reverse().join("") + punctuation;
}