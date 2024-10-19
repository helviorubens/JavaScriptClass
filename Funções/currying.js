/**
 * COMO USAR O CURRYING
 * 
 * Referências:
 *  - https://www.youtube.com/watch?v=hyHqeuyDOk4
 */

// PROBLEMA: necessidade de criar múltiplas variáveis para cada compra
// const getDiscount = (price, discount) => (price * discount) / 100.0

// const discount1 = getDiscount(770, 10)
// const discount2 = getDiscount(2580, 10)
// const discount3 = getDiscount(125, 10)


// CURRYING
const getDiscount = discount => price => (price * discount) / 100.0

const getLevelOneCustomerDiscount = getDiscount(10)
const getLevelTwoCustomerDiscount = getDiscount(20)
const getLevelThreeCustomerDiscount = getDiscount(30)

console.log(
  getLevelOneCustomerDiscount(770),
  getLevelTwoCustomerDiscount(770),
  getLevelThreeCustomerDiscount(770)
)

