// Реализовать zipWith
// zipWith принимает функцию и два массива и связывает их вместе, применяя функцию к каждой паре значений.
// Значение функции - один новый массив.

// Если массивы имеют неодинаковую длину, результат будет такой же длины, как и самый короткий.
// (Значения более длинного массива просто не используются.)

// Входные данные не должны изменяться.

// Примеры:
// zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]) => [1, 10, 100, 1000]
// zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]) => [4, 7, 7, 4, 7, 7]

// zipWith(function (a, b) {
//     return a + b;
// }, [0, 1, 2, 3], [0, 1, 2, 3]) => [0, 2, 4, 6] Обе формы действительны.
// zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]) => [0, 2, 4, 6] Обе формы действительны.
function zipWith(fn, a0, a1) {
    let res = [];
    for (let i = 0; i < a0.length; i++) {
        if (a0[i] !== undefined && a1[i] !== undefined) {
            res.push(fn(a0[i], a1[i]));
        } else {
            break;
        }
    }
    console.log(res);
    return res;
}


const plus = (a, b) => a + b;
zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]); // [6, 6, 6, 6, 6, 6]
zipWith(plus, [0, 1, 2], [6, 5, 4]); // [6, 6, 6]
zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]); // [1, 10, 100, 1000]