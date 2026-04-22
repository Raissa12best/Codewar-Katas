const sortByBinaryOnes=(arr)=> {
  return arr.sort((a, b) => {
    const binA = a.toString(2);
    const binB = b.toString(2);

    const onesA = binA.split('1').length - 1;
    const onesB = binB.split('1').length - 1;
    if (onesA !== onesB) return onesB - onesA;
    if (binA.length !== binB.length) return binA.length - binB.length;
    return a - b;
  });
}