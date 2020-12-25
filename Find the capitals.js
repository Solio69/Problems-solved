// Напишите функцию, которая принимает в качестве аргумента одну строку(слово).Функция должна возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке.

// пример:
// capitals('CodEWaRs'); // [0, 3, 4, 6]

function capitals(word) {
    let newArr = [];
    word.split('').forEach((element, index) => {
        if (element === element.toUpperCase()) {
            newArr.push(index);
        }
    });
    // console.log(newArr);
    return newArr;
}


capitals('CodEWaRs'); // [0, 3, 4, 6]