const assert = require('assert').strict;

// function select(array, condition) {
//     return array.filter(condition)
// }

//Opcion 1
 function select(array, conditionCallback) {
     let result = []

     for (let index = 0; index < array.length; index++) {
         const element = array[index];

         if (conditionCallback(element)) {
             result.push(element)
         }
     }
     return result
 }

//Opcion 2
// function select(array, conditionCallback) {
//     let result = []

//      for (const value of array) {
//          if (value % 2 === 0) {
//              result.push(value)
//          }
//      }

//     return result
// }

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

function pairs(value) {
    return value % 2 === 0
}

function impares(value) {
    return value < 10 && value % 2 === 1
    
}

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
//assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
//assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])

// solo impares
assert.deepStrictEqual(select(values, impares), [3, 5, 7])