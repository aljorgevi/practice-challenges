/*
for inputArray = [3,6,-2,-5,7,3]

the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product
*/

const inputArray = [3,6,-2,-5,7,3]

function adjacentElementsProduct(array) {
    let largestProduct = array[0] * array[1]

    for (var i = 1; i < array.length - 1; i++) {
        const actualProduct = array[i] * array[i + 1]
        if(actualProduct > largestProduct) {
            largestProduct = actualProduct
        }
    }
    return largestProduct
}

adjacentElementsProduct(inputArray)