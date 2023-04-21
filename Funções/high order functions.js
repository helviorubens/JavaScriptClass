/**
 * HOF (HIGH ORDER FUNCTIONS)
 */

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!\n\n`
}

const autentica = (cargo) => {
    let array = []

    for(i = 0; i < cargo; i++){
        array.push(i)
    }

    return true
}

const login = (pessoa, autentica) => {
    if(pessoa.cargo === 'funcionario') {
        autentica(90000)
    } else if(pessoa.cargo === 'diretoria') {
        autentica(90000000)
    }

    return acesso(pessoa.nome)
}

console.log(login({cargo: 'diretoria', nome: `Leia`}, autentica))
console.log(login({cargo: 'funcionario', nome: `Luke`}, autentica))