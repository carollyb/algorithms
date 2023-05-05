//recebe uma array e devolve outra array de mesmo comprimento com o produto de todos os outros elementos.
//ex.: para array de length 4: devolve no index 0 do resultado o produto de index1*index2*index3
//minha solução
export function arrayOfProducts(array: number[]) {
  const result: number[] = [];
  for (let i = 0; i < array.length; i++) {
    let copy = [...array];
    copy.splice(i, 1);
    let product = copy.reduce((a, b) => a * b);
    result.push(product);
  }
  return result;
}
//uma das soluções do algoexpert
export function arrayOfProducts2(array: number[]) {
  const products: number[] = new Array(array.length).fill(1);
  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }
  let rightRunningProduct = 1;
  for (let i = array.length - 1; i > -1; i--) {
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }
  return products;
}
