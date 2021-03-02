// Дано: массив, содержащий хеши имен

// Возврат: строка, отформатированная как список имен, разделенных запятыми, за исключением последних двух имен, которые должны быть разделены амперсандом.

// Пример:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]); // 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ]); // 'Bart & Lisa'

// list([ {name: 'Bart'} ]); // returns 'Bart' 

function list(names) {
    let res = [];
    names.forEach((el, i) => {
        // console.log(el.name);
        if (i === names.length - 2) {
            res.push(el.name + ' & ');
        } else if (i === names.length - 1) {
            res.push(el.name);
        } else {
            res.push(el.name + ', ');
        }

    });
    console.log(res.join(''));
    return res.join('');

}

list([{
    name: 'Bart'
}, {
    name: 'Lisa'
}, {
    name: 'Maggie'
}]); // 'Bart, Lisa & Maggie'