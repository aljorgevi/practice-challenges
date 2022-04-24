// Arrays of objects can be sorted by comparing the value of one of their properties.

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
]

// sort by value
items.sort(function (a, b) {
  return a.value - b.value
})

// sort by name
/*
items.sort(function (a, b) {
  const nameA = a.name.toUpperCase() // ignore upper and lowercase
  const nameB = b.name.toUpperCase() // ignore upper and lowercase
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }

  // names must be equal
  return 0
})
*/

items.sort((a, b) => {
  const nameA = a.name.toUpperCase() // ignore upper and lowercase
  const nameB = b.name.toUpperCase() // ignore upper and lowercase

  if (nameA === nameB) return 0

  return nameA < nameB ? -1 : 1
})

let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numberArray = [40, 1, 5, 200];
let numericStringArray = ['80', '9', '700'];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]


numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']


mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

/*
  Sorting non-ASCII characters
  For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), strings from languages other than English, use String.localeCompare. This function can compare those characters so they appear in the right order.
*/
{
  const items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair']
  items.sort(function (a, b) {
    return a.localeCompare(b)
  })

  // items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
}


