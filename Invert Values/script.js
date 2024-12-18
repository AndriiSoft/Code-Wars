function invert(array) {
    let invertedArray = []
    for (let i = 0; i < array.length; i++) {
        invertedArray[i] = array[i] * (-1)
    }
    return invertedArray
}

console.log(invert([1, -2, 3]))