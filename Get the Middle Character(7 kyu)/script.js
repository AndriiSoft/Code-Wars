// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//
//     If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(string) {
    let newString = ''
    if ((string.length % 2) === 0){
        newString =  (string[string.length/2 - 1] + string[string.length/2])
    }
    else {
        newString =  string[(string.length-1)/2]
    }
    return newString
}

console.log(getMiddle('string'))
console.log(getMiddle('tests'))

// function getMiddle(s)
// {
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }