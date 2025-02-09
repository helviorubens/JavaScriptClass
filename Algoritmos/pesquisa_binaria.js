
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

// const input = [1, 3, 5, 7, 9];

// console.log(pesquisaBinaria(input, 7));
// //console.log(pesquisaBinaria(input, -1));

// const frutas = ["abacaxi", "banana", "laranja", "manga", "morango"];
// console.log(pesquisaBinaria(frutas, "manga"));

function pesquisaBinariaComIndiceOriginal(lista, item) {
  const listaComIndices = lista.map((valor, indice) => ({valor, indice})); // cria um array de objetos
  console.log("listaComIndices", listaComIndices)

  listaComIndices.sort((a, b) => a.valor.localeCompare(b.valor));

  let baixo = 0;
  let alto = listaComIndices.length - 1;
  
  while(baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2);
    const chute = listaComIndices[meio].valor; // acessa primeiro o item do array e depois retorna a chave do objeto associado
    
    if(chute === item) {
      return listaComIndices[meio].indice;
    } else if(chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }
  
  return -1;
}

// Exemplo de uso:
const frutas = ["banana", "abacaxi", "laranja", "manga", "morango"];
console.log(pesquisaBinariaComIndiceOriginal(frutas, "laranja")); // Saída: 2 (índice original de "laranja")
//console.log(pesquisaBinariaComIndiceOriginal(frutas, "abacaxi")); // Saída: 1 (índice original de "abacaxi")
//console.log(pesquisaBinariaComIndiceOriginal(frutas, "uva")); // Saída: -1 (valor não encontrado)