/**
 * "É por isso que eu uso factory functions ao invés de classes em minhas aplicações com JavaScript puro"
 *    - https://www.youtube.com/watch?v=4APvzc9qdN8
 */

// EXEMPLO COM CLASSES

class User  {
  #counter = 0
  constructor (name, email) {
    this.name = name
    this.email = email
  }

  incrementCounter () {
    return ++this.#counter
  }
}

const createUser = (name, email) => {
  let counter = 0

  return {
    name,
    email,
    incrementCounter: () => ++counter    
  }  
}

const admin = new User('Helvio Rubens', 'admin@helviorubens.com')
const admin2 = createUser('Helvio Rubens', 'admin@helviorubens.com')
const admin3 = createUser('Helvio Albuquerque', 'helvio@helviorubens.com')

// closure é a combinação de uma função com seu escopo léxico

//console.log(admin, adminV2)
console.log('admin', admin.incrementCounter())
console.log('admin', admin.incrementCounter())
console.log('admin2', admin2.incrementCounter())
console.log('admin2', admin2.incrementCounter())
console.log('admin3', admin3.incrementCounter())
console.log('admin3', admin3.incrementCounter())