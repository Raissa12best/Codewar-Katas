String.prototype.camelCase = function() {
  
    let words = this.toLowerCase().split(/[\s_-]+/);
    if (words.length === 0) {
        return "";
    }

    const camelCaseWords = words.map((word, index) => {
        if (index === 0) {
            return word.charAt(0).toUpperCase()+word.slice(1);
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });
    return camelCaseWords.join('');
};