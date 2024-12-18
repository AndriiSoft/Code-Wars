// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// [1, 2, 2] returns 9 =  (1*1 + 2*2 + 2*2)

function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i] * numbers[i];
    }
    return (sum)
}

console.log(squareSum([1, 2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([0]))
//console.log(squareSum([1, 2, 3]))