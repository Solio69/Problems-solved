// Учитывая лотерейный билет (билет), представленный массивом из двух значений, вы должны выяснить, выиграли ли вы джекпот. Пример билета:

// [['ABC', 65], ['HGR', 74], ['BYHT', 74]]
// Для этого вы должны сначала подсчитать «мини-выигрыши» на своем билете. В каждом подмассиве есть как строка, так и число. Если код любого из символов в строке совпадает с числом, вы получаете мини-выигрыш. Обратите внимание, у вас может быть только одна мини-победа на каждый подмассив.

// После того, как вы подсчитали все свои мини-выигрыши, сравните это число с другим введенным значением (выигрыш). Если ваша сумма больше или равна (выигрыш), верните «Победитель!». Иначе верните «Неудачник!».

// Все входные данные будут в правильном формате. Строки на билетах не всегда одинаковой длины.
function bingo(ticket, win) {
    let count = 0;
    for (item of ticket) {
        let arrCharCode = [];
        item[0].split('').forEach((element, index) => {
            arrCharCode.push(element.charCodeAt(element[index]));
        });
        if (arrCharCode.includes(item[1])) {
            count++;
        }
    }
    return count >= win ? 'Winner!' : 'Loser!';

}

console.log(bingo([
    ['ABC', 65],
    ['HGR', 74],
    ['BYHT', 74]
], 2)); // 'Loser!'

console.log(bingo([
    ['ABC', 65],
    ['HGR', 74],
    ['BYHT', 74]
], 1)); // 'Winner!'

console.log(bingo([
    ['TTOW', 84],
    ['DBYKYME', 86],
    ['QIOY', 73]
], 3)); // 'Loser!'