---
tags:
  - JavaScript
---
# Utilizando uma IIFE

[[IIFEs]] (Immediately Invoked Function Expressions) podem ser utilizadas para inicializar constantes de objetos de forma eficaz em JavaScript.

Motivos:
- **Escopo:** IIFEs criam um novo escopo, isolando as variáveis declaradas dentro dela. Isso significa que você pode criar constantes dentro da IIFE sem se preocupar com conflitos de nomes em outros escopos.
- **Inicialização imediata:** A função é executada imediatamente após ser definida, garantindo que as constantes sejam inicializadas assim que o código é executado.
- **Modularidade:** IIFEs podem ser usadas para agrupar código relacionado e criar módulos, promovendo uma melhor organização do código.
