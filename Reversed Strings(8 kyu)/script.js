function solution(string) {
    let reversedString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    return reversedString
}

console.log(solution('Hello'))