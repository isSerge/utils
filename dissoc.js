const dissoc = (prop, obj) => {
    const result = {}

    for (const p in obj) {
        if (p !== prop) result[p] = obj[p]
    }

    return result
}