const someObj = {}

Object.keys(someObj).forEach((key) => {
    const value = someObj[key]

    // Log out "key" and "value"
    console.log(key, value)
})

Object.entries(someObj).forEach(([key, value]) => {
    // Log out "key" and "value"
    console.log(key, value)
})

