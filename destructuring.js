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

// Operador de desestruturação para array

let [a, , c, d = -1] = [1, 2, 3]
console.log(a, c, d)


// Operador de desestruturação em função

function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 40, min: 10}
console.log(rand(obj))
console.log(rand({ min: 95})) // o valor máximo é definido como 1000 por padrão
console.log(rand({})) // parâmetros vazios