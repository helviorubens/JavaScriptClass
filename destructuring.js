/**
 * Seção 4 - Aula 64 - Operadores: Destructuring #01
 */

const pessoa = {
    nome: "Hélvio",
    idade: 31,
    endereco: {
        logradouro: 'Rua Severino Pimentel',
        numero: 1796
    }
}

// Operador de desestruturação para objeto
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)