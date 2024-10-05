// objeto global
const MYAPP = {};

// construtores
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// uma variável
MYAPP.some_var = 1;

// um conteiner de objeto
MYAPP.modules = {};

// objetos aninhados
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};

console.log(MYAPP);