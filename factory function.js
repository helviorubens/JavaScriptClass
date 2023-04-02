/**
 * FACTORY FUNCTION
 * 
 * Uma factory function permite criar vários objetos sem precisar duplicar vários objetos manualmente.
 */

let person1 = {
    firstName: 'Hélvio', // propriedade
    lastName: 'Albuquerque', // propriedade
    getFullName() { // método
        return this.firstName + ' ' + this.lastName
    }
}

//console.log(person1.getFullName())


function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        getFullName() {
            return firstName + ' ' + lastName
        }
    }
}

const person_1 = createPerson('Hélvio', 'Albuquerque')
const person_2 = createPerson('Maria', 'José')

console.log(person_1.getFullName())
console.log(person_2.getFullName())