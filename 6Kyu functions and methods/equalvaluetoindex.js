function indexEqualsValue(a) {
  let left = 0;
  let right = a.length - 1;
  let result = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (a[mid] === mid) {
      result = mid;  // Found a match, but keep looking for smaller index
      right = mid - 1;
    } else if (a[mid] < mid) {
      left = mid + 1;  // Search right half
    } else {
      right = mid - 1;  // Search left half
    }
  }
  
  return result;
}