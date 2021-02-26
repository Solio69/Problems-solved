// Для данной строки используйте заглавные буквы, которые занимают четные индексы и нечетные индексы отдельно, и верните, как показано ниже. Индекс 0 будет считаться четным.

// Например, заглавная буква ("abcdef") = ['AbCdEf', 'aBcDeF']. Дополнительные примеры см. В тестовых примерах.

// Ввод будет строчной строкой без пробелов.

function capitalize(s) {
    const res = [];
    const a = s.split('').map((e, i) => {
        return i % 2 === 0 ? e.toUpperCase() : e.toLowerCase();
    });
    const b = s.split('').map((e, i) => {
        return i % 2 === 0 ? e.toLowerCase() : e.toUpperCase();
    });
    res.push(a.join(''), b.join(''));
    console.log(res);
    return res;
}

capitalize("abcdef"); //['AbCdEf', 'aBcDeF']