/**
 * IIFE (Immediately Invoked Function Expression)
 * Funções Imediatas
 * 
 * An IIFE is a JavaScript function that runs as soon as it is defined.
 */

// AVOID POLLUTING THE GLOBAL NAMESPACE

let adder = (function() {
    let myPhrase = ""
    return function(x) { 
    return myPhrase = 
    !!myPhrase ? myPhrase.concat(" ", x) : myPhrase.concat(x)
    }
   })()
    
   console.log(adder("Olá"))  // "Olá"
   console.log(adder("Mundo!")) // "Olá Mundo!"
  