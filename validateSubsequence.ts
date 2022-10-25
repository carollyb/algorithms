/* Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. 
For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2 ,4]. Note that a single number in an array and 
the array itself are both valid subsequences of the array.
Sample input:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

Itera pela array original enquanto itera pela subsequence. Não aumenta o index da
subsequence enquanto não achar um correspondente na array original. Aumenta o index a cada iteração
da array original, encontrando ou não um correspondente na subsequence. 
Retorno => se o initiator chegou até o número de itens na subsequence, é porque encontrou correspondentes
ate o final, ou seja, initiator === sequence.length  */
export function isValidSubsequence(array: number[], sequence: number[]) {
  let initiator = 0
  let i = 0
  while (i < array.length) {
    if (sequence[initiator] === array[i]) initiator++
    i++
  }
  return initiator === sequence.length
}