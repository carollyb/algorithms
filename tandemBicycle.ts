/* 
A tandem bicycle is a bicycle that's operated by two people: person A and
person B. Both people pedal the bicycle, but the person that pedals faster
dictates the speed of the bicycle. So if person A pedals at a speed of 5,
and person B pedals at the speed of 4, the tandem bicycle moves at the speed
of 5.

  You're given two lists of positive integers: one that contains the speeds of
  riders wearing red shirts and one that contains the speeds of riders wearing
  blue shirts. Each rider is represented by a single positive integer, which is
  the speed that they pedal a tandem bicycle at. Both lists have the same
  length, meaning that there are as many red-shirt riders as there are
  blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a
  rider wearing a blue shirt to operate a tandem bicycle.
  
  Write a function that returns the maximum possible total speed or the minimum
  possible total speed of all of the tandem bicycles being ridden based on an
  input parameter, fastest. If fastest = true, , your
  function should return the maximum possible total speed; otherwise it should
  return the minimum total speed.

  
  "Total speed" is defined as the sum of the speeds of all the tandem bicycles
  being ridden. For example, if there are 4 riders (2 red-shirt riders and 2
  blue-shirt riders) who have speeds of 1, 3, 4, 5, , and if they're
  paired on tandem bicycles as follows: [1, 4], [5, 3], then the total speed of
  these tandem bicycles is 4+5=9
  */

/* minha ideia:
 juntar as duas arrays
 ordenar
 somar os valores do subset entre 0 e redShirtSpeeds.length-1
 para fastest == false, o sort fica b-a

 dica do algoexpert: ordena as duas arrays in place e pega os
 maiores valores
 */
//minha solução que só passou nos casos onde o fastest era true::
export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => b - a);
  let result: number = 0;
  let len = redShirtSpeeds.length;
  if (fastest) {
    for (let i = 0; i < Math.floor(len / 2); i++) {
      result += redShirtSpeeds[i];
      result += blueShirtSpeeds[i];
    }
    if (len % 2 !== 0) {
      result += Math.max(
        redShirtSpeeds[Math.floor(len / 2)],
        blueShirtSpeeds[Math.floor(len / 2)]
      );
    }
  } else {
    for (let i = Math.floor(len / 2) + 1; i < len; i++) {
      result += redShirtSpeeds[i];
      result += blueShirtSpeeds[i];
    }
    if (len % 2 !== 0) {
      result += Math.min(
        redShirtSpeeds[Math.floor(len / 2)],
        blueShirtSpeeds[Math.floor(len / 2)]
      );
    }
  }
  return result;
}

export function tandemBicycle2(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => b - a);
  if (!fastest) reverseArray(redShirtSpeeds);
  let totalSpeed = 0;
  for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
    const rider1 = redShirtSpeeds[idx];
    const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx - 1];
    totalSpeed += Math.max(rider1, rider2);
  }

  return totalSpeed;
}

function reverseArray(array: number[]) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}
