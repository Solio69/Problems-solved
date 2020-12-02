// Ваша цель - создать функцию, которая удаляет первый и последний символы строки. Вам дается один параметр - исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.


// function removeChar(str) {
//     let res = str.slice(1, -1);
//     return res;
// }


const removeChar = (str) => str.slice(1, -1);

console.log(removeChar('eloquent')); // loquen