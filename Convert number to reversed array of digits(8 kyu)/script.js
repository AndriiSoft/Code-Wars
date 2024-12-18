// Description:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitizeOne(number) {
    let strNumber = String(number).split('')
    let reverseStrNumber = []
    for (let i = strNumber.length - 1; i >= 0; i--) {
        reverseStrNumber.push(Number(strNumber[i]))
    }
    return reverseStrNumber
}

function digitizeTwo(number) {
    return String(number).split('').reverse().map(Number)
}

console.log(digitizeOne(12345)) //
console.log(digitizeTwo(54321)) //


