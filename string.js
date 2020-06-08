const { adjust } = require('./adjust')
const { compose } = require('./compose')
const { nonAlphaNumericRegExp } = require('./regExp')
const { isNotEmptyString } = require('./primitives')

const splitByNonAlphaNumeric = str =>
    str
        .split(nonAlphaNumericRegExp)
        .filter(isNotEmptyString)

const toUpper = str => str.toUpperCase()
const toLower = str => str.toLowerCase()
const stringToChars = str => str.split('')
const charsToString = xs => xs.join('')
const joinWithUndersore = xs => xs.join('_')
const joinWithDash = xs => xs.join('-')

const toUpperFirst = compose(
    charsToString,
    adjust(0)(toUpper),
    stringToChars,
)

const toLowerFirst = compose(
    charsToString,
    adjust(0)(toLower),
    stringToChars,
)

const toSnakeCase = compose(
    joinWithUndersore,
    xs => xs.map(toLower),
    splitByNonAlphaNumeric,
)

const toScreamingSnakeCase = compose(
    joinWithUndersore,
    xs => xs.map(toUpper),
    splitByNonAlphaNumeric,
)

const toPascalCase = compose(
    charsToString,
    xs => xs.map(toUpperFirst),
    splitByNonAlphaNumeric,
)

const toKebabCase = compose(
    joinWithDash,
    xs => xs.map(toLower),
    splitByNonAlphaNumeric,
)

const toCamelCase =  compose(
    toLowerFirst,
    toPascalCase,
)

console.log(toCamelCase('not a camel case'))