/**
 * CLOSURES
 * Source: https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
 */

// A variável 'a' é definida globalmente com valor '3'
let a = 3

// Tudo o que está entre {} é atribuído a 'addTwo'. O código dentro de 'addTwo' não é avaliado e nem executado, apenas é armazenado dentro de uma variável para uso futuro.
function addTwo(x) {
    let ret = x + 2
    return ret
}

// Uma variável seguida de (...) é indicativo que uma função está sendo chamada.
// Toda função retorna algo, seja um valor, um objeto ou 'undefined', que será atribuído à varável.
let b = addTwo(a)

console.log(b)

/**
 * O caminho percorrido pelo JS é : procurar uma variável no contexto da execução:  local -> de chamamento -> global
 */


