// Fonte: https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

arrA = [1, 2, 3, 5]
arrB = [2, 3]
arrC = [2, 3, 4]

console.log('\n////////// CONJUNTOS')
console.log('A :', arrA)
console.log('B :', arrB)
console.log('C :', arrC)

/** INTERSEÇÃO
 * Retorna os itens que são comuns a ambos os conjuntos.
 */
console.log('\n////////// INTERSEÇÃO')

// Interseção entre A e B
const intersectionAB = arrA.filter(x => arrB.includes(x))
console.log('A & B =>', intersectionAB)

// Interseção entre B e A
const intersectionBA = arrB.filter(x => arrA.includes(x))
console.log('B & A =>', intersectionBA)

// Interseção entre A e C
const intersectionAC = arrA.filter(x => arrC.includes(x))
console.log('A & C =>', intersectionAC)

/** DIFERENÇA À DIREITA
 * Retorna apenas os itens que pertencem ao conjunto I e que NÃO pertencem ao conjunto II.
 */
console.log('\n////////// DIFERENÇA À DIREITA')

// Diferença de A em relação a B
const differenceAB = arrA.filter(x => !arrB.includes(x))
console.log('A \\ B =>', differenceAB)

// Diferença de B em relação a A
const differenceBA = arrB.filter(x => !arrA.includes(x))
console.log('B \\ A =>', differenceBA)

// Diferença de A em relação a C
const differenceAC = arrA.filter(x => !arrC.includes(x))
console.log('A \\ C =>', differenceAC)

/** DIFERENÇA SIMÉTRICA
 * Retorna TODOS os itens que NÃO são comuns entre os arrays, independente da posição do array inicial.
 */
console.log('\n////////// DIFERENÇA SIMÉTRICA')

// Diferença entre A e B
const symmetricAB = arrA
                 .filter(x => !arrB.includes(x))
                 .concat(arrB.filter(x => !arrA.includes(x)));
console.log("A /\\ B =>", symmetricAB)

// Diferença entre B e A
const symmetricBA = arrB
                 .filter(x => !arrA.includes(x))
                 .concat(arrA.filter(x => !arrB.includes(x)));
console.log('B /\\ A =>', symmetricBA)

// Diferença entre A e C
const symmetricAC = arrA
                 .filter(x => !arrC.includes(x))
                 .concat(arrC.filter(x => !arrA.includes(x)));
console.log('A /\\ C =>', symmetricAC)