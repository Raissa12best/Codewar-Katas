function toUnderscore(string) {
   const str=string.toString();
  return str
    .split('')
    .map((char, i) => {
      if (/[A-Z]/.test(char)) {
        return (i !== 0 ? '_' : '') + char.toLowerCase();
      }
      return char;
    })
    .join('');
}