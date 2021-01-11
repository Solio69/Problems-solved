// Напишите функцию, которая может возвращать наименьшее значение массива или индекс этого значения.Второй параметр функции укажет, должно ли оно возвращать значение или индекс.

// Предположим, что первым параметром всегда будет массив, заполненный как минимум одним числом и без дубликатов.Предположим, что второй параметр будет строкой, содержащей одно из двух значений: «значение» и« индекс».


// function min(arr, toReturn) {
//     let minValue = Math.min.apply(null, arr);
//     if (toReturn === 'value') {
//         console.log(minValue);
//         return minValue;
//     } else if (toReturn === 'index') {
//         console.log(arr.indexOf(minValue));
//         return arr.indexOf(minValue);
//     }
// }

// function min(arr, toReturn) {
//     let minValue = Math.min.apply(null, arr);
//     switch (toReturn) {
//         case 'value':
//             console.log(minValue);
//             return minValue;
//         case 'index':
//             console.log(arr.indexOf(minValue));
//             return arr.indexOf(minValue);
//     }
// }

// function min(arr, toReturn) {
//     let minValue = Math.min.apply(null, arr);
//     return toReturn === 'value' ? minValue : arr.indexOf(minValue);
// }

let min = (arr, toReturn) => {
    let minValue = Math.min.apply(null, arr);
    return toReturn === 'value' ? minValue : arr.indexOf(minValue);
};

console.log(min([1, 2, 3, 4, 5], 'value')); // => 1
console.log(min([1, 2, 3, 4, 5], 'index')); // => 0