// Давайте создадим бегущий текст!

// Ваша задача - завершить функцию, которая принимает строку и возвращает массив со всеми возможными поворотами данной строки в верхнем регистре.

// пример
// scrollingText ("кодовые войны") должен вернуть:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

function scrollingText(text) {
    let arr = text.split('');
    let res = [text.toUpperCase(), ];
    for (let i = 0; i < arr.length - 1; i++) {
        arr.push(arr.splice(0, 1)[0]);
        res.push(arr.join('').toUpperCase());
    }
    console.log(res);
    return res;
}
scrollingText("abc"); // ["ABC", "BCA", "CAB"])
// scrollingText("CODEWARS"); // [ "CODEWARS",
// "ODEWARSC",
// "DEWARSCO",
// "EWARSCOD",
// "WARSCODE",
// "ARSCODEW"
// "RSCODEWA",
// "SCODEWAR" ]