# CONTEXTOS GERAIS

## FUNÇÃO

Uma função pode ser declarada como uma expressão denominada "expressão de função".

```javascript
let add = function(a, b) {
    return a + b
}

let add2 = (function(a, b) {
    return a + b
})

console.log(add(1,2))
console.log(add2(1,2))

// Executar imediatamene após declarar (IIFE)
let add3 = (function(a, b) {
    return a + b
})(1, 2)

console.log(add3) // Neste exemplo, a variável 'add' retém o resultado da chamada de função
```
