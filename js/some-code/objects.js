const results = {
    news: [],
    profiles: {
        user: []
    }
}

const mappedResuts =
      Object.keys(results).map(key => {
        const value = results[key]
        console.log(key, '->', value)
      })

Object.entries(results).
map(entry => {
    const [key, value] = entry
    console.log({key, value})
})