/*
  Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
  In other words, return the symmetric difference of the two arrays.

  Note: You can return the array with its elements in any order.
*/

function findDif(a, b) {
  return a.filter(el => b.indexOf(el) === -1)
}

function diffArray(arr1, arr2) {
  return [...findDif(arr1, arr2), ...findDif(arr2, arr1)]
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
)
//  ["pink wool"].
diffArray(
  ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
)
//  ["diorite", "pink wool"].
