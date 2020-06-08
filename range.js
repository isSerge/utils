const range = (from, to) => {
    // check if numbers

    let result = []

    while (from < to) {
        result.push(from)
        from += 1
    }

    return result
}