/*
  We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
  The function is supposed to return a new array made up of num copies of arr.
*/

function copyMachine(arr, num) {
  let array = []

//   while(num >= 1){
//     array.push([...arr])

//     num--
//   }

  for(i = num; i >=1; i--) {
    array.push([...arr])
  }

  return array
}

console.log(copyMachine([true, false, true], 3))