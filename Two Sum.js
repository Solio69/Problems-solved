// Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число. Он должен найти два разных элемента в массиве, которые при сложении дают целевое значение. Затем индексы этих элементов должны быть возвращены в виде кортежа: (index1, index2).

// Для целей этого ката некоторые тесты могут иметь несколько ответов; любые действующие решения будут приняты.

// Ввод всегда будет действительным (числа будут массивом длиной 2 или больше, и все элементы будут числами; цель всегда будет суммой двух разных элементов из этого массива).


function twoSum(numbers, target) {
    let a = 0;
    let res = [];
    for (let i = 0; i < numbers.length; i++) {
        a = numbers[i];
        for (let k = 1; k < numbers.length; k++) {
            if (numbers[k] + a === target) {
                res.push(i, k);
                if (res.length === 2) {
                    return res;
                }
                break;
            }
        }
    }
    console.log(res);
}

twoSum([1, 2, 3], 4); // [0, 2]
// twoSum([1, 2, 3], 4); // [0, 2]
// twoSum([0, 0], 0); // [0, 1]

// twoSum([1234, 5678, 9012], 14690); //[1, 2])
// twoSum([2, 2, 3], 4); // [0, 1])