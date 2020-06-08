const omit = (keys, obj) => {
    const result = {}

    for (const k in obj) {
        if (!keys.includes(k)) result[k] = obj[k]
    }

    return result
}