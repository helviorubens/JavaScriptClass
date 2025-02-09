// MANIPULA OS TIPOS DIRETAMENTE DE FORMA EFICIENTE E REPLICÁVEL
function createTypeHandler() {
  const typeValidators = new Map();

  function getType(value) {
    return Object.prototype.toString.call(value).match(/\[object (\w+)\]/i)[1].toLowerCase();
  }

  function registerValidator(name, fn) {
    typeValidators.set(name, fn);
  }

  function isType(name, value) {
    return typeValidators.has(name) ? typeValidators.get(name)(value) : false;
  }

  function throwErrorType(name, value) {
    if (!isType(name, value)) {
      throw new Error(`The value type is "${getType(value)}" and must be "${name}"!`);
    }
  }

  // Registrando validadores para tipos primitivos
  registerValidator('string', (value) => getType(value) === 'string');
  registerValidator('number', (value) => getType(value) === 'number' && !isNaN(value));
  registerValidator('array', (value) => getType(value) === 'array');
  registerValidator('object', (value) => getType(value) === 'object' && value !== null);

  return {
    isType: isType,
    throwErrorType: throwErrorType,
    registerValidator: registerValidator,
  };
}

// FACILITA A CRIAÇÃO DOS TIPOS PRIMITIVOS E PERSONALIZADOS
function baseValidators() {
  const typeHandler = createTypeHandler();

  const isString = (value) => typeHandler.isType('string', value);
  const isNotEmptyString = (value) => isString(value) && value.trim() !== '';

  const isNumber = (value) => typeHandler.isType('number', value);
  const isPositiveNumber = (value) => isNumber(value) && value > 0;

  const isArray  = (value) => typeHandler.isType('array', value);
  const isNonEmptyArray = (value) => isArray(value) && value.length > 0;

  const isObject = (value) => typeHandler.isType('object', value);
  const hasRequiredKeys = (value, requiredKeys)  => {
    if(!isObject(value)) {
      return false;
    }

    return requiredKeys.every(key => key in value);
  }

  return {
    isString: isString,
    isNotEmptyString: isNotEmptyString,
    isNumber: isNumber,
    isPositiveNumber: isPositiveNumber,
    isArray: isArray,
    isNonEmptyArray: isNonEmptyArray,
    isObject: isObject,
    hasRequiredKeys: hasRequiredKeys,
  };
}

// REGRAS GERAIS DE VALIDAÇÃO PARA OS TIPOS
function validatorFactory(){
  const base = baseValidators();

  function createValidator(type, options={}) {
    const base = baseValidators();
  
    switch(type) {
      case 'string':
        return (value) => base.isString(value) && (!options.required || base.isNotEmptyString(value));
      case 'number':
        return (value) => base.isNumber(value) && (!options.positive || base.isPositiveNumber(value));
      case 'array':
        return (value) => base.isArray(value) && (!options.nonEmpty || base.isNonEmptyArray(value));
      case 'object':
        return (value) => base.isObject(value) && (!options.requiredKeys || base.hasRequiredKeys(value, options.requiredKeys));
      default:
        throw new Error(`Tipo de validação não suportado: ${type}`);
    }
  }

  return {
    createValidator,
  }
}

// REGRAS DE VALIDAÇÃO DOS TIPOS PARA 'USER'
function userValidator() {
  const factory = validatorFactory();

  const validateName = factory.createValidator('string', {required: true});
  const validateAge = factory.createValidator('number', {positive: true});
  const validateHobbies = factory.createValidator('array', {nonEmpty: true});
  // const validateDebts = factory.createValidator('number');
  const validateUserObject = factory.createValidator('object', {requiredKeys: ['name', 'age', 'hobbies']});

  return {
    validateName,
    validateAge,
    validateHobbies,
    // validateDebts,
    validateUserObject,
  };
}

// COMO SERÁ EXIBIDA A VALIDAÇÃO DE UM OBJETO 'USER'
function validateUser(user) {
  const validator = userValidator();

  if(!validator.validateUserObject(user)) {
    console.error(`A idade é um dado obrigatório e não foi informado!`);
    return false;
  }

  if(!validator.validateName(user.name)) {
    return false;
  }

  if(!validator.validateAge(user.age)) {
    console.error(`A idade foi informada com valor não permitido: ${user.age}`);
    return false;
  }

  if(!validator.validateHobbies(user.hobbies)) {
    return false;
  }

  // if(!validator.validateDebts(user.debts)) {
  //   console.error(`O valor da dívida foi informado com valor não permitido: ${user.debts}`);
  //   return false;
  // }

  return true;
}

// OBJETO USUÁRIO
const user = {
  name: "Hélvio Albuquerque",
  age: 33,
  hobbies: ['ler', 'ouvir podcast', 'codificar em JS'],
  // debts: -300.25,
};

console.log(user);
console.log(validateUser(user));