
/**
 * 
 * @param {Array} lista - array ordenado
 * @param {Number} item - item a ser encontrado
*/
function pesquisaBinaria(lista, item) {
  let baixo = 0;
  let alto = lista.length - 1;
  
  while(baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2);
    const chute = lista[meio];
    
    if(chute === item) {
      return meio;
    } else if(chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }
  
  return null;
}

const input = [1, 3, 5, 7, 9];

console.log(pesquisaBinaria(input, 7));
console.log(pesquisaBinaria(input, -1));

const frutas = ["abacaxi", "banana", "laranja", "manga", "morango"];

console.log(pesquisaBinaria(frutas, "manga"));
console.log(pesquisaBinaria(frutas, "uva"));