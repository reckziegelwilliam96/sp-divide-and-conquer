function sortedFrequency(arr, num) {
    let firstIdx = firstOccurrence(arr, num);
    if (firstIdx === -1) return firstIdx;
    let lastIdx = lastOccurrence(arr, num);
    return lastIdx - firstIdx + 1;
  }
  
  function firstOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < num) {
        left = mid + 1;
      } else {
        if (arr[mid - 1] !== num || mid === 0) {
          return mid;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  }
  
  function lastOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] > num) {
        right = mid - 1;
      } else {
        if (arr[mid + 1] !== num || mid === arr.length - 1) {
          return mid;
        } else {
          left = mid + 1;
        }
      }
    }
  }
  

module.exports = sortedFrequency