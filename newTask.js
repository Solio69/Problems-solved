function newStr(num) {
    let out = '';
    let lastNum = Number(String(num).substr(-2, 2));

    if (lastNum === 1) {
        out = '';
    } else if (lastNum >= 2 && lastNum <= 4) {
        out = 'а';
    } else {
        out = 'ов';
    }
    return `${num} Прогарммист${out}`;
}

console.log(newStr(2));