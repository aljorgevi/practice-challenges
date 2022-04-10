const responses = []

for (const url of urls) {
    const response = fetch(url)
    responses.push(response)
}

await Promise.all(responses);

// --------------------------------------------

await Promise.all(urls.map(url => fetch(url)))