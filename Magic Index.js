// Магический индекс в массиве A [1 ... n-1] определяется как такой индекс, где A[i] = i.. Учитывая отсортированный массив различных целых чисел, напишите метод для поиска магического индекса, если он существует, в массиве A.

// findMagic([-20,-10,2,10,20]); // Returns 2

function findMagic(arr) {
    let res = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            res = arr[i];
        }
    }
    console.log(res);
    return res;
}

// findMagic([-20, -10, 2, 10, 20]); // Returns 2
// findMagic([6, 5, 83, 5, 3, 18]); // - 1

console.log(findMagic([-20, -10, 2, 10, 20]));
console.log(findMagic([6, 5, 83, 5, 3, 18]));