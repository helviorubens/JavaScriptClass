/**
 * HERANÇA PROTOTÍPICA COM Object.create()
 * Com propriedades adicionais
 */

// Objeto base
const animal = {
  species: 'Dog',
  sound() {
    console.log('Bark!');
  }
};

// Criando um novo objeto com propriedades adicionais
const pet = Object.create(animal,  {
  name: {
    value: 'Buddy',
    writable: true,
    enumerable: true
  },
  age: {
    value: 3,
    writable: false,
    enumerable: true
  }
});

// Usando o novo objeto
console.log(`pet.name:`, pet.name);
console.log(`pet.age:`, pet.age);

// Tentando modificar a propriedade 'age' que não é 'writable', ou seja, é imutável
pet.age = 5;
console.log(`Tentando mudar 'pet.age = 5'. Resultado -> pet.age:`, pet.age);

// Método herdado de 'animal'
pet.sound();