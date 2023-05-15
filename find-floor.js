function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x || (arr[mid] < x && (mid === arr.length - 1 || arr[mid + 1] > x))) {
        return arr[mid];
      } else if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  

module.exports = findFloor