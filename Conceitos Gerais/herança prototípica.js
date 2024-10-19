// Objeto base
const person = {
  name: 'John Doe',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

// Criando um novo objeto que herda de 'person'
const student = Object.create(person);
student.name = 'Jane Doe';  // Sobrescrevendo a propriedade 'name'
student.age = 22;           // Sobrescrevendo a propriedade 'age'

// Usando o método herdado de 'person'
student.greet();