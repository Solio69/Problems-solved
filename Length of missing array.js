// Вы получаете массив массивов.
// Если вы отсортируете массивы по их длине, вы увидите, что их значения длины являются последовательными.
// Но не хватает одного массива!
// Вам нужно написать метод, который возвращает длину отсутствующего массива.

// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// Если массив массивов равен нулю / нулю или пуст, метод должен вернуть 0.

// Если массив в массиве равен нулю или пуст, метод также должен возвращать 0!

// Всегда будет отсутствующий элемент, и его длина всегда будет между заданными массивами.

// РАБОТАЕТ НО НЕ ПРОХОДИТ ТЕСТЫ
function getLengthOfMissingArray(arrayOfArrays) {

    let newArr = arrayOfArrays.map(el => el.length);

    if ([arrayOfArrays.length == 0] || newArr.includes(0) == true) {
        return 0;
    } else {
        newArr.sort((a, b) => {
            return a - b;
        });
        // console.log(newArr);
        for (let i = 0; i < newArr.length - 1; i++) {
            if ((newArr[i] + 1) != newArr[i + 1]) {
                return newArr[i] + 1;
            }
        }

    }
}

console.log(getLengthOfMissingArray([
    [null],
    [null, null, null]
])); // 2);

// console.log(getLengthOfMissingArray([
//     [3],
//     [],
//     [2, 0],
//     [4, 1, 3],
//     [3, 2, 2, 0],
//     [3, 3, 3, 0, 1],
//     [3, 4, 2, 1, 1, 0],
//     [0, 4, 4, 2, 4, 3, 1, 4]
// ])); // 0


// console.log(getLengthOfMissingArray([])); // 0