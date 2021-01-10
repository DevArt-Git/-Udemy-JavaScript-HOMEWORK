// while, do while, for, for in, for of 

// let i = 10;
// while (i--) {
//     console.log(i);
// }

// do {
//     console.log('action');
// } while (i > 0);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//     // console.log(str[i] + ' !');
//     res += str[i] + '*'
// }
// console.log(res);

// let colors = ['white', 'black', 'yellow', 'orange', 'blue'];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
//     colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);

// const users = [
//     {
//         name: 'Denis',
//         age: 30
//     },
//     {
//         name: 'Artem',
//         age: 28
//     },
//     {
//         name: 'Mark',
//         age: 10
//     },
//     {
//         name: 'Olga',
//         age: 5
//     },
// ];

// const usersObj = {};

// for (let i = 0; i < users.length; i++) {
//     // console.log(users[i].name);
//     usersObj[users[i].name] = users[i];
// }
// console.log(usersObj['Denis']);
// console.log(usersObj);
// console.log(users);

// const user = {
//     name: 'Denis',
//     age: 30
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }


// Задачи:

let str = 'i am in the easycode'; // сделать новую строку где первые буквы каждого слова будут в верхнем регистре
let newStr = '';
console.log(str);
for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' && (str[i - 1] === ' ' || i === 0)) {
        newStr += str[i].toUpperCase()
    } else {
        newStr += str[i];
    }
};
console.log(newStr);

let str1 = "tseb eht ma i"; // Используя циклы, сделать строку-перевертыш
let newStr1 = '';
for (let i = 1; i <= str1.length; i++) {
    newStr1 += str1[str1.length - i];
}
console.log(newStr1);


let resultNumber = 1; // С помощью циклов вычислить факториал числа 10. Использовать for.
let n = 10;
for (let number = 1; number <= n; number++) {
    resultNumber *= number;
    console.log(resultNumber);
}


let someStr = "JavaScript is a pretty good language"; // сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for
let newStr2 = '';
console.log(someStr);
for (let i = 0; i < someStr.length; i++) {
    if (someStr[i - 1] === ' ' || i === 0) {
        newStr2 += someStr[i].toUpperCase()
    } else if (someStr[i] === ' ') {
        newStr2 += '';
    }
    else {
        newStr2 += someStr[i];
    }
};
console.log(newStr2);

let someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль
for (let value of someArr) {
    if (value % 2 !== 0) { //(num % 2)
        console.log(value);
    }
};

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (let value in list) {
    if (typeof list[value] === 'string') {
        a = list[value].toUpperCase();
        console.log(a);
    }
}
let asd = null;
console.log(asd);

let foo = { str: 'test' };
console.log(foo && foo.str);

let arr = [];
console.log(arr.length);
arr[500] = 1
console.log(arr.length);