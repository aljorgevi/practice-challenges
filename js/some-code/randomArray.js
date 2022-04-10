const numbers = [2, 3, 5, 8, 3, 54, 8, 9, 4, 2, 2, 2, 3, 1, 2, 3];

let numbers1 = [...new Set(numbers)];

// --------------------------------

numbers.sort((a, b) => Math.random() - 0.5)

// --------------------------------

const randomIndex = Math.floor(
    Math.random() * numbers.length
)

numbers[randomIndex]

