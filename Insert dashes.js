// Напишите функцию insert_dash (num) / insertDash (num) / InsertDash (int num), которая будет вставлять тире ('-') между каждыми двумя нечетными числами в num. Например: если число 454793, вывод должен быть 4547-9-3. Не считайте ноль как нечетное число.

// Обратите внимание, что число всегда будет неотрицательным (> = 0).

function insertDash(num) {
    let arr = String(num).split('').map(item => Number(item));
    let res = [];
    arr.forEach((item, index) => {
        item % 2 !== 0 && arr[index + 1] % 2 !== 0 && arr[index + 1] !== undefined ? res.push(item + '-') : res.push(item);
    });
    console.log(res.join(''));
    return res.join('');
}

insertDash(454793); //'4547-9-3'
insertDash(123456); //  '123456'
insertDash(1003567); // '1003-567'