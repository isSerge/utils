const difference = (xs, ys) => {
    const setXs = new Set(xs)
    const setYs = new Set(ys)
    return [...[...setXs].filter(x => !setYs.has(x))]
}