// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.

// Пример [1, -4,7,12] => 1 + 7 + 12 = 20

// Примечание: если суммировать нечего, сумма по умолчанию равна 0.

// function positiveSum(arr) {
//     if (arr.length) {
//         let a = arr.filter(item => item > 0);
//         if (a.length > 0) {
//             let b = a.reduce((item, sum) => item + sum);
//             return b;
//         } else {
//             return a.length;
//         }
//     } else {
//         return 0;
//     }

// }

function positiveSum(arr) {
    if (arr.length) {
        let arr2 = arr.filter(i => i > 0);
        return arr2.length > 0 ? arr2.reduce((i, s) => i + s) : arr2.length;
    } else {
        return 0;
    }
}


console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([])); // 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0