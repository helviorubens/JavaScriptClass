const ERROR_MESSAGES = {
  INVALID_NAME: 'O nome do usuário é inválido ou está vazio.',
  INVALID_AGE:  'A idade informada não é um número positivo',
  INVALID_HOBBIES: 'A lista de hobbies não pode estar vazia',
  INVALID_DATE: 'A data de criação é inválida ou está vazia',
  INVALID_OBJECT: 'O objeto do usuário não contém todas as chaves obrigatórias'
}

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
  registerValidator('date', (value) => getType(value) === 'date' && !isNaN(value));

  return {
    isType: isType,
    throwErrorType: throwErrorType,
    registerValidator: registerValidator,
  };
}

// FACILITA A CRIAÇÃO DOS TIPOS PRIMITIVOS E PERSONALIZADOS - validações de tipos básicos
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

  const isDate = (value) => typeHandler.isType('date', value);
  const isDateNotInFuture = (value) => isDate(value) && value <= new Date();

  return {
    isString: isString,
    isNotEmptyString: isNotEmptyString,
    isNumber: isNumber,
    isPositiveNumber: isPositiveNumber,
    isArray: isArray,
    isNonEmptyArray: isNonEmptyArray,
    isObject: isObject,
    hasRequiredKeys: hasRequiredKeys,
    isDate: isDate,
    isDateNotInFuture: isDateNotInFuture,
  };
}

// REGRAS GERAIS DE VALIDAÇÃO PARA OS TIPOS - lógica de validação
function validatorFactory(){
  const base = baseValidators();

  function createValidator(type, options={}) {
    switch(type) {
      case 'string':
        return (value) => base.isString(value) && (!options.required || base.isNotEmptyString(value));
      case 'number':
        return (value) => base.isNumber(value) && (!options.positive || base.isPositiveNumber(value));
      case 'array':
        return (value) => base.isArray(value) && (!options.nonEmpty || base.isNonEmptyArray(value));
      case 'object':
        return (value) => base.isObject(value) && (!options.requiredKeys || base.hasRequiredKeys(value, options.requiredKeys));
      case 'date':
        return (value) => base.isDate(value) && (!options.notInFuture || base.isDateNotInFuture(value));
      default:
        throw new Error(`Tipo de validação não suportado: ${type}`);
    }
  }

  return {
    createValidator,
  }
}

// REGRAS DE VALIDAÇÃO DOS TIPOS PARA 'USER' - regras específicas
function userValidator() {
  const factory = validatorFactory();

  const validateName = factory.createValidator('string', {required: true});
  const validateAge = factory.createValidator('number', {positive: true});
  const validateHobbies = factory.createValidator('array', {nonEmpty: true});
  // const validateDebts = factory.createValidator('number');
  const validateCreatedAt = factory.createValidator('date', {notInFuture: true});
  const validateUserObject = factory.createValidator('object', {requiredKeys: ['name', 'age', 'hobbies']});

  return {
    validateName: validateName,
    validateAge: validateAge,
    validateHobbies: validateHobbies,
    // validateDebts: validateDebts,
    validateCreatedAt: validateCreatedAt,
    validateUserObject: validateUserObject,
  };
}

// COMO SERÁ EXIBIDA A VALIDAÇÃO DE UM OBJETO 'USER'
function validateUser(user) {
  const validator = userValidator();

  if(!validator.validateUserObject(user)) {
    console.error(ERROR_MESSAGES.INVALID_OBJECT);
    return false;
  }

  if(!validator.validateName(user.name)) {
    console.error(ERROR_MESSAGES.INVALID_NAME);
    return false;
  }

  if(!validator.validateAge(user.age)) {
    console.error(ERROR_MESSAGES.INVALID_AGE);
    return false;
  }

  if(!validator.validateHobbies(user.hobbies)) {
    console.error(ERROR_MESSAGES.INVALID_HOBBIES);
    return false;
  }
  
  // if(!validator.validateDebts(user.debts)) {
  //   console.error(`O valor da dívida foi informado com valor não permitido: ${user.debts}`);
  //   return false;
  // }

  if(!validator.validateCreatedAt(user.createdAt)) {
    console.error(ERROR_MESSAGES.INVALID_DATE);
    return false;
  }

  return true;
}

// OBJETO USUÁRIO
const user = {
  name: "Hélvio Albuquerque",
  age: 33,
  hobbies: ['ler', 'ouvir podcast', 'codificar em JS'],
  // debts: -300.25,
  createdAt: new Date('2023-10-01'),
};

console.log(user);
console.log(validateUser(user));