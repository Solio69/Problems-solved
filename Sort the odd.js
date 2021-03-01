// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на своих исходных позициях.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArray = (array) => {
    let oddArr = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);
    console.log(oddArr);

    let res = array.map(el => {
        if (el % 2 === 0) {
            return el;
        } else {
            // возвращает первый элемент масиива oddArr и возвращает его в масииве res вместо el
            return oddArr.shift();
        }
    });
    console.log(res);

};

// тоже самое, но короче 
// const sortArray = (array) => {
//     let oddArr = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);

//     return array.map(el => el % 2 === 0 ? el : oddArr.shift());
// };

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]