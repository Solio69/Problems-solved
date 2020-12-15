// Простой, учитывая строку слов, возвращает длину самого короткого слова (слов).
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.


function findShort(s) {
    let arr = s.split(' ');
    let res = arr[0].length;
    arr.forEach((item) => {
        if (item.length < res) {
            res = item.length;
        }
    });
    console.log(res);
    return res;
}

findShort("bitcoin take over the world maybe who knows perhaps"); // 3