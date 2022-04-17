/*
  Finish writing the function so that it returns true if the object passed to it contains all four names:
  Alan, Jeff, Sarah and Ryan and returns false otherwise.
*/

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    return (
        userObj.hasOwnProperty('Alan') &&
        userObj.hasOwnProperty('Jeff') &&
        userObj.hasOwnProperty('Sarah') &&
        userObj.hasOwnProperty('Ryan')
    );
}

// **************************************************
function isEveryoneHere(userObj) {
    const names = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
    return names.every(name => userObj.hasOwnProperty(name));
}

// **************************************************
function isEveryoneHere(userObj) {
    const names = ['Alan', 'Jeff', 'Sarah', 'Ryan'];
    const arrayOfKeys = Object.keys(userObj);

    let i = names.length;

    while (i--) {
        if (names[i] !== arrayOfKeys[i]) return false;
    }

    return true;
}

console.log(isEveryoneHere(users));