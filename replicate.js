const replicate = (xs, n) => {
    let index = 0
    let array = []

    while (index < n) {
        array = [...array, ...xs]
        index += 1
    }

    return array
}