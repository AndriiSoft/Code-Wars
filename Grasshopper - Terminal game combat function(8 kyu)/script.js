// 🔴Create a combat function that takes the player's current health and the amount of damage received,
// and returns the player's new health. Health can't be less than 0.

//🟢
function combat(health, damage) {
    if (health < damage) {
        return 0
    } else return health - damage
}

// function combat(health, damage) {
//     return health < damage ? 0 : health - damage
// }

// const combat = (health, damage) => Math.max(0, health - damage);

console.log(combat(100, 5))
console.log(combat(92, 8))
console.log(combat(20, 30))