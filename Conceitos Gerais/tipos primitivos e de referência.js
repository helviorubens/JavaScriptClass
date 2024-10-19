/**
 * https://www.youtube.com/watch?v=AznfDQ1b70I
 */

// VALORES PRIMITIVOS (Number, String, etc)
//    - são armazenados diretamente no stack

let scoreOne = 50; // armazenado no heap no local 'scoreOne'
let scoreTwo = scoreOne; // armazenado no heap no local 'scoreTwo'

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

scoreOne = 100; // modifica apenas o valor do local 'scoreOne'
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

// VALORES DE REFERÊNCIA (objetos)
//    - usam um ponteiro no stack para referenciar o que está no heap

let userOne = {name: 'Hélvio', score: 50}; // armazena um ponteiro no stack para o objeto que está no heap
let userTwo = userOne; // armazena o mesmo ponteiro de 'userOne' no stack

console.log(userOne, userTwo);

userOne.score = 100; // modifica o objeto que está no heap, logo todos os ponteiros que o referenciam serão iguais
console.log(userOne, userTwo);