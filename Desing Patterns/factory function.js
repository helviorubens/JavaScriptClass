/**
 * FACTORY FUNCTION
 * 
 * Uma factory function permite criar vários objetos sem precisar duplicar vários objetos manualmente.
 * Referências:
 *    - https://www.youtube.com/watch?v=arAz2Ff8s88
 */



////////////////// Objeto literal, sem possibilidade de criar novas instâncias

// let person1 = {
//     firstName: 'Hélvio',
//     lastName: 'Albuquerque',
//     getFullName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

//console.log(person1.getFullName())

////////////////// Factory function para lidar com a criação do objeto

function createPersonV1(firstName, lastName) {
    return {
        firstName,
        lastName,
        getFullName() {
            return console.log(firstName + ' ' + lastName);
        }
    }
}

function createPersonV2(firstName, lastName) {
  // Membros privados
  const lastNameUpper = lastName.toUpperCase();
  function getFullName() {
    return console.log(`${lastNameUpper}, ${firstName}`);
  }

  // Membros públicos
  // -> "lastNameUpper" está encapsulado apenas no contexto da factory, não sendo exposto fora dela.
  return {
    firstName,
    lastName,
    getFullName
  }
}

const personV1 = createPersonV1('Hélvio', 'Albuquerque');
const personV2 = createPersonV2('Hélvio', 'Albuquerque');

personV1.getFullName();
personV2.getFullName();