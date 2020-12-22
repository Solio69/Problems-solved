// Создайте программу, которая фильтрует список строк и возвращает список только с именами ваших друзей.

// Если в имени ровно 4 буквы, можете быть уверены, что это должен быть ваш друг!В противном случае можете быть уверены, что он не...

//Пример: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// const friend = (friends) => {
//     return friends.filter(item => item.length === 4);
// };

const friend = friends => friends.filter(friend => friend.length == 4);

console.log(friend(["Ryan", "Kieran", "Mark"]));


// friend(["Ryan", "Kieran", "Mark"]); // ["Ryan", "Mark"]