// Учитывая двумерный массив, верните новый массив, который переносит только те массивы из оригинала, которые не были пустыми и все элементы которых имеют один и тот же тип (т. Е. Однородны). Для простоты массивы внутри массива будут содержать только символы и целые числа.

// Пример:

// Учитывая [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], ваша функция должна вернуть [[1, 5, 4], ['b']].

// Дополнение:

// Имейте в виду, что в этом ката мы предполагаем, что пустые массивы неоднородны.

// Результирующие массивы должны быть в том порядке, в котором они были изначально, и не должны изменять свои значения.

// Неявное приведение типов не допускается. Подмассив [1, '2'] будет считаться недопустимым и должен быть отфильтрован.

function filterHomogenous(arrays) {
    let res = [];
    for (let val of arrays) {
        if (val.length) {
            if (val.every(elem => typeof elem == typeof val[0]) === true) {
                res.push(val);
            }
        }
    }
    console.log(res);
    return res;
}
filterHomogenous([
    [1, 5, 4],
    ['a', 3, 5],
    ['b'],
    [],
    ['1', 2, 3]
]); // [[1, 5, 4], ['b']]);
filterHomogenous([
    [123, 234, 432],
    ['', 'abc'],
    [''],
    ['', 1],
    ['', '1'],
    []
]); // [[123, 234, 432], ['', 'abc'], [''], ['', '1']]);