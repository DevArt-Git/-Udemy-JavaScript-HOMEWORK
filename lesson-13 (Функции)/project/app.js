function sayHello(firstName = 'Default', lastName = 'Default') {
    // if (!firstName) {
    //     return console.error('Error');
    // }
    // console.log(firstName, lastName);
    return `Hello ${firstName} ${lastName}`;
}

let res = sayHello('Artem', 'Chern') + ' !';
let res1 = sayHello() + ' !';
console.log(res);
console.log(res1);

let x = 10;
function foo() {
    let x = 20;
    console.log(x);
}
foo();
console.log(x);

const user = {
    name: 'Denis',
    age: 30
};

function getObj(obj) {
    console.log(obj);
    obj.name = 'Den';
}
getObj(user);
console.log(user);

const square = function (x) {
    return x * x;
};


(function (msg) {
    console.log(msg);
})('HI !!!!');

// Проверка 
// function calc(a, b) { 
//     if (typeof a !== “number” || isNaN(a)) return console.log(“error”);
//     if (typeof b !== “number” || isNaN(b)) return console.log(“error”);
//     return a + b;
//     }

// Задачи:
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение
function multiply() {
    if (!arguments.length) {
        return 0
    } else {
        let result = 1;
        // for (let i = 0; i < arguments.length; i++) {
        //     result *= arguments[i];
        // }
        for (const arg in arguments) {
            result *= arguments[arg];
        }
        console.log(result);
    }

}
multiply(1, 2, 3, 4, 5);
multiply();

// Создать функцию, которая принимает строку и возвращает строку-перевертыш:
(function () {
    function reverseString(string) {
        let str = String(string);
        let newStr = '';
        for (let i = 1; i <= str.length; i++) {
            newStr += str[str.length - i];
        }
        // for (let i = string.length; i--; ) {
        //     res += string[i];
        //   }
        console.log(newStr);
        return newStr;
    }
    reverseString('Hello');
}())

// Создать функцию, которая в качестве аргумента принимает строку из букв
// и возвращает строку, где каждый символ разделен пробелом и заменен
// на юникод-значение символа:
function getCodeStringFromText(string) {
    let str = String(string);
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += str[i].charCodeAt() + ' ';
    }
    console.log(newStr);
};
getCodeStringFromText('Hello World')

// // Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
// число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
// заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
// ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
// числа.
function guessTheNumber(num) {
    let number = Number(num);
    let i = 10;

    if (typeof number !== 'number' || isNaN(number)) return console.log('Введите число!');
    if (number < 0 || number > i) return console.log(`Введите число в диапозоне от нуля до ${i}`);

    if (0 > number <= i) {
        let randomNumber = Math.ceil(Math.random() * i);
        if (randomNumber === number) {
            console.log('Вы выйграли!');
        } else {
            console.log(`Вы не угадали, ваше число ${number}, а выпало число ${randomNumber}.`);
        }
    } else {
        console.log('Введите число от 1 до 10');
    };
};
guessTheNumber('sdfdsf');

// Создать функцию, которая принимает число n и возвращает массив, 
// заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(n) {
    if (typeof n === "number") {
        let array = [];
        for (let i = 1; i <= n; i++) {
            array.push(i);
        }
        console.log(array);
        return array;
    } else {
        console.log('Введите число');
    }
}
getArray(10);

// Создать функцию, которая принимает массив, а возвращает новый массив 
// с дублированными элементами входного массива.
function doubleArray(array) {
    let newArray;
    if (Array.isArray(array)) {
        newArray = array.concat(array);
        console.log(newArray);
    } else {
        console.log('Принимается только массив!');
    }
};
doubleArray([12, 1, 2, 4]);

// Создать функцию, которая принимает произвольное (любое) число массивов и 
// удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
function changeCollection() {
    let newArr = [];

    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            args = arguments[i]; // Превращаем "arguments" в массив
            args.shift();
            newArr.push(args);
            // console.log(newArr);
        } else {
            console.log('В качестве аргументов принимаются только массивы');
            return
        }
    }
    console.log(newArr);
}

changeCollection([1, 2, 3, 4, 5], [1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f', 'g']);

function changeCollection2() {
    const res = [];

    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            const el = arguments[i].slice(); // копируем массив
            el.shift(); // убираем 1 элемнет с начала
            res.push(el) // добавляем в новый массив res поочередно
        }
    }
    return res;
}
console.log(changeCollection2([1, 2, 3, 4, 5], [1, 2, 3]))

// Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
// значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
// массив с пользователями соответсвующие указанным параметрам.

const users = [
    {
        'name': 'Denis',
        'age': 30,
        'gender': 'male',
        'car': 'BMW'
    },
    {
        'name': 'Ivan',
        'age': 25,
        'gender': 'male',
        'car': 'Mersedes'
    },
    {
        'name': 'Anna',
        'age': 33,
        'gender': 'female',
        'car': 'VOLVO'
    },
    {
        'name': 'Kate',
        'age': 35,
        'gender': 'female',
        'car': 'Alfa Romeo'
    },
];

function funcGetUsers(usersArr, key, value) {
    // Проверки:
    if (!Array.isArray(usersArr)) return alert('The first argument should be an array');
    if (typeof key !== 'string' || key === '') return alert('The key should be a valid string');
    if (value === undefined || value === null) return alert('The value should be a valid value.');

    const newArray = [];
    for (let i = 0; i < usersArr.length; i++) {
        if (usersArr[i][key] === value) {
            newArray.push(usersArr[i]);
        }

    }
    console.log(newArray);
}
funcGetUsers(users, 'gender', 'male');