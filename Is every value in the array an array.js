// Каждое значение в массиве является массивом?

// Это должно проверить только второе измерение массива. Значения вложенных массивов не обязательно должны быть массивами.

// Примеры:
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

const arrCheck = value => value.every(elem => Array.isArray(elem));

arrCheck([]); // true
arrCheck([
    ['string']
]); // true
arrCheck([
    [], {}
]); //false
arrCheck([
    [1],
    [2],
    [3]
]); // true
arrCheck(['A', 'R', 'R', 'A', 'Y', []]); // false