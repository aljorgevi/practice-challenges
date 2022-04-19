/*
  Title Case a Sentence
  Return the provided string with the first letter of each word capitalized.
  Make sure the rest of the word is in lower case.

  For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function titleCase(str) {
  const arr = str.split(' ')
  let result = ""

  arr.forEach(w => {
    const upper = capitalizeFirstLetter(w.toLowerCase())
    result += ` ${upper}`
  })

  return result.substring(1);
  /*
  const newTitle = str.split(" ");
  const updatedTitle = [];

    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
    */
}

console.log(titleCase("I'm a little tea pot")) //I'm A Little Tea Pot.
console.log(titleCase("sHoRt AnD sToUt")) // Short And Stout.

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")) // Here Is My Handle Here Is My Spout.