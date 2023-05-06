/* Dada uma array com possibilidades de moedas e um inteiro n representando um montante target,
escreva uma função que retorna o número mínimo de moedas necessárias para chegar ao target
Você tem um número ilimitado de cada moeda da array
ex: n = 7
  denoms = [1,5,10]
  resposta = 3 (2 de 1 + 1 de 5)
 */
export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  const numOfCoins: number[] = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1
        );
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}
