const adjust = (index) => (func) => xs => xs.map((x, i) => i === index ? func(x) : x)

module.exports = {
    adjust
}