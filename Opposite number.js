// Очень просто, задав число, найти его противоположность.

// Примеры:

// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     if (number === 0) {
//         return 0;
//     }
//     return number * -1;
// }

const opposite = (number) => (number === 0) ? 0 : number * -1;

console.log(opposite(14)); // -1