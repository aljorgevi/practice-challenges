/*
  The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes.
  Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized
  (set back to an empty array) in the outer loop.

  Returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
*/



function zeroArray(rows, columns) {
	let newArray = []

  for(i = 0; i < rows; i++) {
    const row = []
    for(j = 0; j < columns; j++) {
      // console.log({i,j})
      row.push(0)
    }
    newArray.push(row)
  }


  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);