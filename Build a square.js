// Я дам вам целое число.Верни мне фигуру такой же длины и ширины, как целое число.Целое число будет целым числом от 1 до 50.
// n = 3
// поэтому я ожидаю квадрат 3x3, как показано ниже, в виде строки:

// +++
// +++
// +++

// function generateShape(integer) {
//     let outStr = '';
//     for (let i = 0; i < integer; i++) {
//         for (let k = 0; k < integer; k++) {
//             outStr += '+';
//         }
//         outStr += '\n';
//     }
//     console.log(outStr);
//     return outStr.substring(0, outStr.length - 1);
// }

function generateShape(int) {
    return new Array(int).fill(int).map(int => '+'.repeat(int)).join('\n');
}

console.log(generateShape(3));