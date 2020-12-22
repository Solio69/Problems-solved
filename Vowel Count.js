// Возвращает количество(количество) гласных в заданной строке.

// Мы будем рассматривать a, e, i, o, u как гласные для этого ката(но не y).

// Входная строка будет состоять только из строчных букв и / или пробелов.

// function getCount(str) {
//     let vowelsCount = 0;
//     let arr = ['a', 'e', 'i', 'o', 'u'];
//     str.split('').forEach(element => {
//         if (arr.indexOf(element) !== -1) {
//             vowelsCount += 1;
//         }
//         return vowelsCount;
//     });
//     console.log(vowelsCount);
//     return vowelsCount;
// }
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
// getCount("abracadabra"); // 5
console.log(getCount("abracadabra"));