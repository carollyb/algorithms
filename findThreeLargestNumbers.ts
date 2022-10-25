/* Write a function that takes in an array of at least three integers and, without sorting the input array,
returns a sorted array of the three largest integers in the input array
the function should return duplicate integers if necessary; for example, it
should return [10, 10, 12] for an input array of [10, 5, 10, 12] */
export function findThreeLargestNumbers(array: number[]) {
  let len = 3
  let result: number[] = []
  for (let i=0; i<len; i++){
    const max = Math.max(...array)
    result.push(max)
    array.splice(array.indexOf(max), 1)
  }
  return result.sort((a,b) => a-b);
}
