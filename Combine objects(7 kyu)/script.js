// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
//
//     All input object properties will have only numeric values. Objects are combined together so that the values of
//     matching keys are added together.
//
//     An example:
//
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.


function combine() {
    let result = {} // Создаем новый объект для хранения комбинированных данных

    // Перебираем все объекты, переданные в функцию
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i]
        for (let key in obj) {
            if (result.hasOwnProperty(key)) {
                result[key] += obj[key] // Если свойство уже есть, добавляем его значение
            } else {
                result[key] = obj[key] // Если свойство отсутствует, просто добавляем его
            }
        }
    }
    return result // Возвращаем комбинированный объект
}

const objA = {a: 10, b: 20, c: 30};
const objB = {a: 3, c: 6, d: 3};
const objC = {a: 4, b: 8, c: 7};

console.log(combine(objA, objB, objC));

