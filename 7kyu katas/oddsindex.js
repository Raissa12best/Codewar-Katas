function oddBall(arr){
const oddIndex = arr.indexOf("odd");  
for (let item of arr) {
    if (typeof item === "number" && item === oddIndex) {
      return true; 
    }
  }

  return false;
}