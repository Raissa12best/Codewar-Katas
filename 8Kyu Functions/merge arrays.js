function mergeArrays(arr1, arr2) {
const merged=[...arr1,...arr2];
  
 const uniqueArrays = merged.filter((item, index) => merged.indexOf(item) === index); 
 
  uniqueArrays.sort((a,b)=>a-b);
  
  return uniqueArrays;
  
  
}