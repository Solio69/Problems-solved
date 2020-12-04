// Если не можешь заснуть, считай овец !!

// Задача:
// Если задано неотрицательное целое число, например 3, верните строку с бормотанием: «1 овца ... 2 овцы ... 3 овцы ...». Ввод всегда будет действительным, т.е. отрицательных целых чисел нет.

const countSheep = (num) => {
    let res = '';
    for (let i = 0; i < num; i++) {
        res += `${i+1} sheep...`;
    }
    return res;
};


console.log(countSheep(1)); // "1 sheep..."
console.log(countSheep(2)); // "1 sheep...2 sheep..."