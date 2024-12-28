// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.

function sumMix(mixedArray) {
    let newValue = 0
    for (let i = 0; i < mixedArray.length; i++) {
        mixedArray[i] = Number(mixedArray[i])
    }
    console.log(mixedArray)

    for (let i = 0; i < mixedArray.length; i++) {
        newValue += mixedArray[i]
    }
    return newValue
}

console.log(sumMix([1, '1']))

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
// }

// function sumMix(x){
//     let result = 0;
//     for (let n of x) {
//         result += parseInt(n);
//     }
//     return result;
// }