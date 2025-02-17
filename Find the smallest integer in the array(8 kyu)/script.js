// Given an array of integers your solution should find the smallest integer.
//
//     For example:
//
//     Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(array) {
    let smallestElement = array[0]
    for (let i = 0; i < array.length; i++) {
        if (smallestElement > array[i])
            smallestElement = array[i]
    }
    return smallestElement
}

console.log(findSmallestInt([34, -345, -1, 100]))

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args)
//     }
// }

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min.apply(null, args);
//     }
// }