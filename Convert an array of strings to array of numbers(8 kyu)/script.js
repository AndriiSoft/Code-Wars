// Oh no!
//     Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
//
//     You need to cast the whole array to the correct type.
//
//     Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
//
//     ie:["1", "2", "3"] to [1, 2, 3]
//
// Note that you can receive floats as well.
function toNumberArray(stringArray) {
    let numberArray = []
    for (let i = 0; i < stringArray.length; i++) {
        numberArray.push(Number(stringArray[i]))
    }
    return numberArray
}

function toNumberArray2(stringArray) {
    let numberArray = []
    for (let i = 0; i < stringArray.length; i++) {
        numberArray[i] = (Number(stringArray[i]))
    }
    return numberArray
}

function toNumberArray3(stringArray) {
    return stringArray.map(Number);
}

console.log(toNumberArray(["1", "2", "3"]))
console.log(toNumberArray2(["1", "2", "3"]))
console.log(toNumberArray3(["1", "2", "3"]))