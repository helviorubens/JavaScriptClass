/**
 * HERANÇA SEM PROTÓTIPO
 * Criar um objeto completamente vazio, sem o protótipo padrão, como `toString()` ou `hasOwnProperty()`.
 * 
 * Útil para:
 *    - criação de tabelas hash simples ou dicionários;
 *    - evitar colisões de propriedades com o protótipo padrão. * 
 */

const dictionary = Object.create(null);

dictionary.apple = 'A fruit';
dictionary.car = 'A vehicle';

console.log(dictionary.apple);
console.log(dictionary.toString); // Saída: undefined (não existe 'toString')