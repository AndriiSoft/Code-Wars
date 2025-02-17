// In this kata you will create a function that takes a list of non-negative integers and strings and returns
// a new list with the strings filtered out.
//
//     Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filterList(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            newArray.push(array[i])
        }
    }
    return newArray
}

// function filter_list(l) {
//     return l.filter(function(v) {return typeof v == 'number'})
// }
console.log(filterList([1,2,'a','b']))
console.log(filterList([1,'a','b',0,15]))
console.log(filterList([1,2,'aasf','1','123',123]))