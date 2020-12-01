// Учитывая список чисел, определите, является ли сумма его элементов нечетной или четной.
// Дайте свой ответ в виде строки, соответствующей «нечетному» или «четному».
// Если входной массив пуст, считайте его: [0] (массив с нулем).

// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

function oddOrEven(array) {
    let sumArrNum;
    if (array.length == 0) {
        console.log('even');
        return 'even';
    } else {
        sumArrNum = array.reduce((sum, curent) => sum + curent);
        if (sumArrNum % 2 == 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }
}
// function oddOrEven(arr) {
//     console.log(arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even');
// }

// const even_or_odd = a => a.reduce((s, n) => s + n, 0) % 2 == 0 ? "Even" : "Odd";

oddOrEven([0]); //'even'
oddOrEven([1]); // 'odd'
oddOrEven([]); //'even'
oddOrEven([0, 1, 2]); // 'odd'
oddOrEven([-1023, -1, 3]); // 'odd'