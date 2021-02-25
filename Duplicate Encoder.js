// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен "(", если этот символ появляется только один раз в исходной строке, или ")", если этот символ встречается более одного раза в исходной строке нить. Игнорируйте использование заглавных букв при определении дубликата символа.

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
    let res = [];
    let newArr = word.toLowerCase().split('');
    newArr.forEach(element => {
        newArr.filter(item => item === element).length > 1 ? res.push(')') : res.push('(');
    });
    // console.log(res.join(''));
    return res.join('');
}
// duplicateEncode("din"); // "(((") 
duplicateEncode("Success"); //  ")())())" следует игнорировать регистр;
// duplicateEncode("(( @"); //  "))((")