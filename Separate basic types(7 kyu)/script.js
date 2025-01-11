// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate
// properties for each of types presented in input. Each property should contain an array of corresponding values.
//
//     keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:
//
//     ['a', 1, 2, false, 'b']
//
// {
//     number: [1, 2],
//         string: ['a', 'b'],
//     boolean: [false]
// }

function separateTypes(input) {
    let resultObject = {}

    let numberArray = []
    let stringArray = []
    let booleanArray = []

    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] === 'string') {
            stringArray.push(input[i])
        } else if (typeof input[i] === 'number') {
            numberArray.push(input[i])
        } else if (typeof input[i] === 'boolean') {
            booleanArray.push(input[i])
        }
    }

    // Добавляем только непустые массивы
    if (numberArray.length > 0) resultObject.number = numberArray
    if (stringArray.length > 0) resultObject.string = stringArray
    if (booleanArray.length > 0) resultObject.boolean = booleanArray

    return resultObject
}

console.log(separateTypes(['a', 1, 2, false, 'b']))