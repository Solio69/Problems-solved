// Задача:
// Учитывая массив / список[] целых чисел, создайте массив продуктов такого же размера, чтобы prod[i] был равен произведению всех элементов Arr[], кроме Arr[i]

// Примечания:
//     Размер массива / списка не менее 2.
// Числа массива / списка будут только положительными
// Возможно повторение чисел в массиве / списке.

function productArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr.filter((item, index) => item !== arr[i] || index !== arr.indexOf(arr[i])).reduce((sum, curent) => sum * curent));
    }
    // return newArr;
    console.log(newArr);
}

productArray([1, 5, 2, ]); // [10,2,5]
productArray([2, 3, 10, 2]); // [60, 40, 12, 60]'