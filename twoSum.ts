/* Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target
sum. If any two numbers in the input array sum up to the target sum, the function should return them in
an array, in any order. If no two numbers sum up to the target sum, the function should return an empty
array.
Note that the target sum has to be obtained by summing two different integers in the array: you can't
add a single integer to itself in order to obtain the target sum.
You can assume that there will be at most one pair of numbers summing up to the target sum.
sample input: [3,5,-4,8,11,1,-1,6], 10 */
export function twoNumberSum(array: number[], targetSum: number) {
  array.sort((a: number, b: number) => a - b)
    let left = 0
    let right = array.length -1
    while (left < right){
      const currentSum = array[left] + array[right]
        if (currentSum === targetSum) {
            return [array[left], array[right]]
        } else if (currentSum < targetSum) {
            left++
        } else if (currentSum > targetSum) {
            right--
        }
    }
    return []
}
