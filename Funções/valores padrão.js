// Atribuindo valores padrão a argumentos de uma função

function func(var1 = -1, var2 = 2){
    return var1 + var2
}

console.log(func(1,1))
console.log(func(1))
console.log(func())

// Atribuindo valores padrão a construtores

class Pessoa {
    constructor(nome, idade, funcionario = true){
        this.nome = nome
        this.idade = idade
        this.funcionario = funcionario
    }

    print(){
        console.log('nome', this.nome)
        console.log('idade', this.idade)
        console.log('funcionario', this.funcionario)
    }
}

const pessoa1 = new Pessoa('Hélvio', 31)
pessoa1.print()

const pessoa2 = new Pessoa('Rubens', 25, false)
pessoa2.print()