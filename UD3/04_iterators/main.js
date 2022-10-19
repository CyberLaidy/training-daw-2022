'use strict'

const { Console } = require('console');

let map = new Map();
const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

// //Funciona y Bien
//  function iterateSimple() {
//    for (let i = 0; i < pilots.length; i++) {
//      //me imprime uno o dos
//      console.log(pilots[i]);
//    }
//  }
//  iterateSimple();

// //Funciona y Bien
//  function iterateForEach() {
//    pilots.forEach(element => {
//      console.log(element);
//    });
//  }
//  iterateForEach();

//Funciona y Bien
 function mapIds() {
  return pilots.map(x => x.id)
 }
mapIds();

//Funciona y Bien
function rebels() {
  return pilots.filter(reb => reb.faction === 'Rebels')
}
rebels();

//Funciona y Bien
function totalFaction(faction) {
  return pilots.filter(reb => reb.faction === faction).length
}

//
function avgYears(faction) {
  return pilots .filter(x => x.faction === faction).reduce((a, b) => a + b.years, 0) / pilots.filter(x => x.faction === faction).length

}
avgYears();

// use console.log 
// try {
//   assert.deepStrictEqual(mapIds(), [2,8,40,66])
//   assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

//   assert.deepStrictEqual(totalFaction('Rebels'), 2)

//   assert.deepStrictEqual(avgYears('Rebels'), 22.5)
//   assert.deepStrictEqual(avgYears('Empire'), 25)
// } catch (error) {
//   console.error(error)
// }