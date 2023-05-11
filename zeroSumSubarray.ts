/* Given a list of integers nums, write a function that
  returns a boolean representing whether there 
  exists a zero-sum subarray of nums    
  
  A zero-sum subarray is any subarray where all of the values add up to zero.
  A subarray is any contiguous section of the array. For the purposes of this
  problem, a subarray can be as small as one element and as long as the
  original array.
  
  Sample input
  nums= [-5,-5,2,3,-2]
  sample output: true
  */
//O(n) time | O(n) space

export function zeroSumSubarray(nums: number[]) {
  const sums = new Set([0]);
  let currentSum = 0;
  for (let num of nums) {
    currentSum += num;
    if (sums.has(currentSum)) return true;
    sums.add(currentSum);
  }
  return false;
}
