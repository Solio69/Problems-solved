// Сценарий
// Несколько человек стоят в ряд, разделенные на две команды.Первый человек входит в команду 1, второй - в команду 2, третий - в команду 1 и так далее.

// Задача
// Учитывая массив положительных целых чисел(веса людей), верните новый массив / кортеж из двух целых чисел, где первое - это общий вес команды 1, а второе - общий вес команды 2.

// Примечания
// Размер массива не менее 1.
// Все числа будут положительными.

// rowWeights([13, ​​27, 49]) == > return (62, 27)
// Пояснение:
//  Первый элемент 62 - это общий вес команды 1, а второй элемент 27 - это общий вес команды 2.

function rowWeights(array) {
    let res = [];
    if (array.length == 1) {
        res.push(array[0]);
        res.push(0);

    } else {
        res.push(array.filter((_, index) => index % 2 == 0).reduce((sum, curent) => sum + curent));

        res.push(array.filter((_, index) => index % 2 != 0).reduce((sum, curent) => sum + curent));
    }
    return res;
}

// сделать проще 
// function rowWeights(array) {
//     let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
//     let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);
//     // console.log([t1, t2]);
//     return [t1, t2];
// }

rowWeights([100, 50]); // [100,50])
rowWeights([50, 60, 70, 80]); // [120,140])
rowWeights([80]); //[80,0]
rowWeights([0, 1, 0]); // [0,1]