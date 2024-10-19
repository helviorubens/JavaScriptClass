// let obj = {
//   value: 1,
//   increment: function () {
//     this.value += 1;
//     return this;
//   },
//   add: function (v) {
//     this.value += v;
//     return this;
//   },
//   shout: function() {
//     console.log(this.value)
//   }
// };


// obj.increment().add(3).shout();


function createObj() {
  // Membro privado
  let value = 1;

  return {
    increment: function () {
      value += 1;
      return this; // Permite o encadeamento
    },
    add: function (v) {
      value += v;
      return this; // Permite o encadeamento
    },
    shout: function () {
      console.log(value); // Acessa o membro privado
      return this; // Permite o encadeamento
    },
    // Opcional: Método para expor o valor privado (caso necessário)
    getValue: function () {
      return value;
    }
  };
}

// Exemplo de uso:
const obj = createObj();

// Encadeando métodos
obj.increment().add(5).shout(); // Output: 7
