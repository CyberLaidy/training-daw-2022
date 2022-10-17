const assert = require('assert').strict;

function select(array, condition) {
    let result = []
      for (const value of array) {
          if (value % 2 === 0) {
              result.push(value)
          }
      }

     return result
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

//Funcion flecha
let pairs = (value) => value % 2 === 0;


// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
//assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
//assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])