const binarySearch = function(nums, target) {
    if (!nums || nums.length === 0) {
      return -1;
    }
  
    // the initial value for left index is 0
    let left = 0;
    // the initial value for right index is the number of elements in the array
    let right = nums.length;
    // left + 1 >= right will finish while loop
    while (left + 1 < right) {
      let mid = Math.floor((right + left) / 2);
  
      if (nums[mid] === target) {
        // mid is the index of the target
        return mid;
      } else if (nums[mid] < target) {
        // there is no sense to search in the left half of the array
        left = mid;
      } else {
        // there is no sense to search in the right half of the array
        right = mid;
      }
    }
    // left can be the index of the target
    if (nums[left] === target) {
      return left;
    }
    // the target doesn't exist in the array
    return -1;
}

const nums = [1,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59];

console.log(`Index of 37 is ---> ${binarySearch(nums, 37)}`);
console.log(`Index of 1 is ---> ${binarySearch(nums, 1)}`);
console.log(`Index of 59 is ---> ${binarySearch(nums, 59)}`);
console.log(`Index of 25 is ---> ${binarySearch(nums, 25)}`);