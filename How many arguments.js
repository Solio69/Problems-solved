// Создайте функцию с именем args_count, которая возвращает количество предоставленных аргументов
function argsCount() {
    return arguments.length;
}




console.log(argsCount(1, 2)); // 2
console.log(argsCount()); // 0
console.log(argsCount('A', 'B', 'C')); // 3 
console.log(argsCount(["foo", "bar"])); // 1