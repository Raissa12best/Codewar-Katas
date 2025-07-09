function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }

  return [...string].filter((char, index) => (index + 1) % 2 === 0);
}