/**
 * REST OPERATOR ...
 * Permite representar um número indefinido de argumentos na forma de um Array.
 * 
 * Sintaxe
 * (argA, argB, ...outrosArgs) => void
 */
function soma (...valores) {
    var total = 0

    for (const item of valores) {
        total += parseInt(item, 10)
    }

    return total
}

console.log(soma(1, 2, 3, 4, 50, 10, 23))

// O uso das reticencias indica que todos os valores passados por parâmetros serão passados para a função como a variável valores que contem um Array de valores.


const getRestArgs = (...rest) => rest

console.log(getRestArgs(1, 2))
console.log(getRestArgs(1, 2, 3))

const arr = [4, 5, 6]
console.log(getRestArgs(1, 2, 3, arr))

// Às vezes é necessário usar algum recurso para percorrer o array formado pelo opperador rest

const produtos = [
    { descricao: 'Papel Ofício', quantidade: 10, valor: 10.50 },
    { descricao: 'Lapis preto', quantidade: 20, valor: 0.50 }
]

function total (...produtos) {
    return produtos
        .map(produto => produto.quantidade * produto.valor)
        .reduce((a, b) => a + b, 0)
}

console.log(total(...produtos))