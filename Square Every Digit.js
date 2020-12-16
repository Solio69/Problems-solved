// В этом ката вас просят возвести в квадрат каждую цифру числа и соединить их.

// Например, если мы пропустим 9119 через функцию, выйдет 811181, потому что 92 - это 81, а 12 - 1.

// Примечание: функция принимает целое число и возвращает целое число.

// function squareDigits(num) {
//     num = String(num).split('');
//     let a = num.map(item => {
//         return Math.pow(Number(item), 2);
//     });

//     a = Number(a.join(''));
//     console.log(typeof a);
//     console.log(a);
//     return a;
// }

const squareDigits = num => {
    return +(String(num).split('').map(item => {
        return Math.pow(+item, 2);
    }).join(''));
};

console.log(squareDigits(9119));
// squareDigits(9119); // 811181