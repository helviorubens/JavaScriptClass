// Fonte: https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

arrA = [1, 2, 3]
arrB = [2, 3]
arrC = [2, 3, 4]

/** INTERSEÇÃO
 * Retorna apenas os itens que são comuns a ambos os arrays, independente da posição na iteração
 */

// Interseção de A com B
//// [1, 2, 3] - [2, 3] -> ['2', '3']
const intersectionAB = arrA.filter(x => arrB.includes(x))
console.log('interseção A - B', intersectionAB)

// Interseção de B com A
//// [1, 2, 3] - [2, 3] -> ['2', '3']
const intersectionBA = arrB.filter(x => arrA.includes(x))
console.log('interseção B - A', intersectionBA) // ['2', '3']

/** DIFERENÇA
 * Retorna os itens que NÃO não comuns a ambos os arrays, porém pode ser fortemente dependente da posição na iteração
 */

/** DIFERENÇA À DIREITA
 * Apenas os itens diferentes à direta do array inicial são retornados. Possui forte dependência da posição na iteração.
 */

// Diferença de A para B
//// [1, 2, 3] \ [2, 3] -> [1]
const differenceAB = arrA.filter(x => !arrB.includes(x))
console.log('diferença A - B', differenceAB)

// Diferença de B para A
//// [2, 3] \ [1, 2, 3] -> [ ]
const differenceBA = arrB.filter(x => !arrA.includes(x))
console.log('diferença B - A', differenceBA)

// Elementos diferentes à esquerda serão ignorados
//// [1, 2, 3] \ [2, 3, 4] -> [1]
const differenceLeft = arrA.filter(x => !arrC.includes(x))
console.log('diferença ESQ', differenceLeft)

/** DIFERENÇA SIMÉTRICA
 * Os itens diferentes à direta e à esquerda do array inicial são retornados.
 */

// Independe da posição dos arrays
//// [1, 2, 3] /\ [2, 3] -> [1]
const symmetricAB = arrA
                 .filter(x => !arrB.includes(x))
                 .concat(arrB.filter(x => !arrA.includes(x)));
console.log('dif. simétrica A - B', symmetricAB)

//// [2, 3] /\ [1, 2, 3] -> [1]
const symmetricBA = arrB
                 .filter(x => !arrA.includes(x))
                 .concat(arrA.filter(x => !arrB.includes(x)));
console.log('dif. simétrica B - A', symmetricBA)

// Identifica os itens diferentes à direita e à esquerda
//// [1, 2, 3] /\ [2, 3, 4] -> [1, 4]
const symmetricLeft = arrA
                 .filter(x => !arrC.includes(x))
                 .concat(arrC.filter(x => !arrA.includes(x)));
console.log('dif. simétrica ESQ', symmetricLeft)