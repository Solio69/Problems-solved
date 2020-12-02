// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), который возвращает строку этих чисел в форме номера телефона.

// function createPhoneNumber(numbers) {
//     // индекс 0 = (
//     numbers.splice(0, 0, "(");
//     // индекс 4 = )
//     numbers.splice(4, 0, ")");
//     // индекс 5 = ' '
//     numbers.splice(5, 0, " ");
//     // индекс 9 = '-'
//     numbers.splice(9, 0, "-");
//     let res = numbers.join('');
//     console.log(res);
//     return res;
// }
function createPhoneNumber(numbers) {
    let a = numbers.filter((_, i) => i < 3).join('');
    let b = numbers.filter((_, i) => i >= 3 && i < 6).join('');
    let c = numbers.filter((_, i) => i >= 6).join('');

    let res = `(${a}) ${b}-${c}`;
    return res;
}


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"