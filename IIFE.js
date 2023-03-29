/**
 * IIFE (Immediately Invoked Function Expression)
 * Funções Imediatas
 * 
 * An IIFE ou expressão de função imediatamente invocada é chamada assim pois é criada como uma expressão e executada imediatamente. Ver exemplo em "conceitos gerais.js"
 */

// AVOID POLLUTING THE GLOBAL NAMESPACE

/*
let adder = (function() {
    let myPhrase = ""
    return function(x) { 
    return myPhrase = 
    !!myPhrase ? myPhrase.concat(" ", x) : myPhrase.concat(x)
    }
   })()
    
   console.log(adder("Olá"))  // "Olá"
   console.log(adder("Mundo!")) // "Olá Mundo!"
   */

/**
 * https://ricardo-reis.medium.com/express%C3%A3o-de-fun%C3%A7%C3%A3o-imediatamente-invocada-b706a7ee02f4
 */

  const calculator = (function() {
    function add(a, b){
        return a + b
    }

    function multiply(a, b){
        return a * b
    }

    return {
        add: add,
        multiply: multiply
    }
  })()

  console.log(calculator.add(10, 20))
  console.log(calculator.multiply(10, 20))