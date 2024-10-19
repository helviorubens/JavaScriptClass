/**
 * HERANÇA DE PROTÓTIPOS com Object.create()
 * 
 * Definir dinamicamente o protótipo de um objeto baseado em uma condição.
 */

const bird = {
  fly() {
    console.log(`${this.type} is flying!`);
  }
};

const fish = {
  swim() {
    console.log(`${this.type} is swimming!`);
  }
};

function createAnimal(type) {
  if (type === 'bird') {
    return Object.create(bird, { type: { value: 'Bird', enumerable: true } });
  } else if (type === 'fish') {
    return Object.create(fish, { type: { value: 'Fish', enumerable: true } });
  }
}

const animal1 = createAnimal('bird');
animal1.fly(); // Saída: "Bird is flying!"

const animal2 = createAnimal('fish');
animal2.swim(); // Saída: "Fish is swimming!"