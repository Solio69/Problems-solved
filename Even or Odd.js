// Создайте функцию (или напишите сценарий в Shell), которая принимает целое число в качестве аргумента и возвращает «Четный» для четных чисел или «Нечетный» для нечетных чисел.

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'odd' : 'even';
// }
const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';


console.log(evenOrOdd(2)); //"Even"
console.log(evenOrOdd(0)); //"Even"
console.log(evenOrOdd(7)); //"Odd"
console.log(evenOrOdd(1)); //"Odd"