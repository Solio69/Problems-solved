// У некоторых чисел есть забавные свойства.Например:
// 89 - > 8¹ + 9² = 89 * 1
// 695 - > 6² + 9³ + 5⁴ = 36 + 729 + 625 = 1390 = 695 * 2
// 46288 - > 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Дано положительное целое число n, записанное как abcd...(a, b, c, d...цифры) и положительное целое число p

// мы хотим найти положительное целое число k, если оно существует, например, сумма цифр n, взятых в последовательные степени p, равна k * n.

// Другими словами:
// Есть ли целое число k, например: (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k

// Если это так, мы вернем k, если не вернем - 1.

// Примечание: n и p всегда будут строго положительными целыми числами.

// function digPow(n, p) {
//     // перевести в массив чисел
//     // возвести каждый элемент массива в степень p 
//     let arr = String(n).split('').map((element) => {
//         let b = Math.pow(Number(element), p);
//         // console.log(p);
//         p++;
//         return b;
//     });

//     // найти сумму элементов возведенных в степень
//     let c = arr.reduce((previousValue, currentValue) => {
//         return previousValue + currentValue;
//     });
//     // console.log(c);
//     // разделить на n => получаем k
//     let k = c / n;
//     // console.log(k);
//     // если k > 0 и не дробное,то вернуть k
//     // ели нет, то вернуть -1 
//     if (Number.isInteger(k) && Number.isInteger(k) > 0) {
//         console.log(k);
//         return k;
//     } else {
//         console.log(-1);
//         return -1;
//     }
// }

function digPow(n, p) {
    let k = String(n).split('').map((element) => {
        let b = Math.pow(Number(element), p);
        p++;
        return b;
    }).reduce((sum, item) => sum + item) / n;

    return Number.isInteger(k) && Number.isInteger(k) ? k : -1;
}
console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));

digPow(89, 1); // 1 // 8 + 81 = 89/89
digPow(92, 1); // -1 // =>  9 + 4 = 13 = 13/92 = 0.14.... => -1 
digPow(46288, 3); // 51 => 2360688/46288 => 51