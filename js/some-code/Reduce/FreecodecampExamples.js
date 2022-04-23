/*
  Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript.
  You can solve almost any array processing problem using the reduce method.

  The reduce method allows for more general forms of array processing,
  and it's possible to show that both filter and map can be derived as special applications of reduce.
  The reduce method iterates over each item in an array and returns a single value
  (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

  The callback function accepts four arguments.
  The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration.
  The second is the current element being processed.
  The third is the index of that element and the fourth is the array upon which reduce is called.

  In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator.
  If this second parameter is not used, then the first iteration is skipped,
  and the second iteration gets passed the first element of the array as the accumulator.

  See below for an example using reduce on the users array to return the sum of all the users' ages.
  For simplicity, the example only uses the first and second arguments.

The variable watchList holds an array of objects with information on several movies.
  Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan.
  Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables,
  and return the average rating from getRating function.
  Note that the rating values are saved as strings in the object and need to be converted
  into numbers before they are used in any mathematical operations.
*/

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64

/*
In another example, see how an object can be returned containing the names of the users as properties with their ages as values
*/

const users2 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users2.reduce((obj, user) => {
 obj[user.name] = user.age;
 return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }.


// ************************************************************************************************************************



