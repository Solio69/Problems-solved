// В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.


const filterList = (l) => l.filter(item => {
    return typeof item !== 'string';

});

console.log(filterList([1, 2, 'a', 'b', 0]));

// filterList([1, 2, 'a', 'b', 0]); // [1,2, 0]