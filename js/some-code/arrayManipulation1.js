/*
  We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array.
  Elem represents an element that may or may not be present on one or more of the arrays nested within arr.
  Modify the function, using a for loop, to return a filtered version of the passed array
  such that any array nested within arr containing elem has been removed.
*/

function filteredArray(arr, elem) {
    const newArray = []

    for(let i =0; i < arr.length; i++) {
        if(arr[i].indexOf(elem) === -1) {
            newArray.push(arr[i])
        }
    }

    return newArray;
}

console.log(
    filteredArray(
        [
            [3, 2, 3, 99],
            [1, 6, 3, 99],
            [3, 13, 26, 99],
            [19, 3, 9],
        ],
        99
    )
)