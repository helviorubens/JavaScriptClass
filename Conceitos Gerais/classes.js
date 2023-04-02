class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }

    anunciarTitulo() {
        console.log(`Títuo: ${this.nome}`)
    }

    definirLivro() {
        console.log(`O livro ${this.nome} é da editora ${this.editora} e possui ${this.paginas} páginas`)
    }
}

const nodeJS = new Livro("NodeJS Handbook", "Bookman", 459)
nodeJS.anunciarTitulo()
nodeJS.definirLivro()

// HERANÇA

class Colecoes extends Livro {
    constructor(nome, colecao) {
        super(nome)
        this.colecao = colecao
    }

    definirColecao(){
        console.log(`O livro ${this.nome} pertence à coleçação ${this.colecao}`)
    }
}

const colecaoSaber = new Colecoes('JavaScript na Prática', 'Na Prática')

colecaoSaber.definirColecao()
colecaoSaber.anunciarTitulo()
