function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot]) {
      return binarySearch(arr, num, 0, pivot);
    } else {
      return binarySearch(arr, num, pivot + 1, arr.length - 1);
    }
  }
  
  function findPivot(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[left] <= arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  
  function binarySearch(arr, num, left, right) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === num) {
        return mid;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  

module.exports = findRotatedIndex