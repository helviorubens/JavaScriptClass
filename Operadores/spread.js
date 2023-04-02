/**
 * SPREAD OPERATOR ...
 * Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.
 * 
 * Sintaxe
 * [{(...argumentos)}]
 */

const pessoas = ['Pedro', 'Maria', 'João']

const todasAsPessoas = [ 'Marcus', ...pessoas, 'Tiago']

console.log(todasAsPessoas)