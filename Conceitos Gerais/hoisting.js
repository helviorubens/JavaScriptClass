/**
 * Seção 4 - Aula 59: Entendendo o Hoisting
 * DEFINIÇÃO: hoisting é o comportamento padrão de mover as declarações para o topo.
 * - Pode gerar alguns efeitos estranhos, como declarar uma variável antes que ela seja atribuída a algun valor.
 */

// Ocorre hoisting
function testeVar(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

// Não ocorre hoisting
function testeLet(){
    console.log('b =', b)
    let b = 2
    console.log('b =', b)
}

testeVar() // Ocorre o hoisting "içamento" da variável definida apenas depois
//testeLet() // Retorna erro, pois não é possível "içar"/acessar a variável

// Classes não possuem hoisting, diferentemente de funções

const NodeJS = new Livro("Primeiros passoa com NodeJS", "Casa do Código", 195)
NodeJS.anunciarTitulo() // retorna erro, pois 'Livro' ainda não foi definido, ou seja, não possui hoisting

class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    anunciarTitulo() {
        console.log(`Títuo: ${this.nome}`)
    }
}