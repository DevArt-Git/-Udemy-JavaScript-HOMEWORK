const num1 = 10;
const num2 = 20;
let value;

value = num1 + num2;
// value = value + 100;
value += 100;
value = 4;
// value = 5 % 2;
value++;
value--;

value = 0.6 + 0.7;
// value = parseFloat(value.toFixed(1));
value = (0.6 * 10 + 0.7 * 10) / 10;
value = Math.PI;
value = Math.random();
value = Math.round(2.7);
value = Math.ceil(2.1);
value = Math.floor(2.7);
value = Math.min(2.7, 0, 15);

value = Math.floor(Math.random() * 10 + 1);

const arr = ['balck', 'blue', 'red', 'white', 'green'];
value = Math.floor(Math.random() * arr.length);
console.log(value, arr[value]);

// Задачи:

let piFromMath;
piFromMath = Math.PI.toFixed(2);
console.log(piFromMath);

// const pi = Number(Math.PI.toFixed(2));
// // ! Помните что toFixed возвращает строку поэтому лучше еще делать явное преобразование к числу
// // ! Вы можете использовать функцию Number или parseFloat
// console.log(pi);

let someArrMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let someArrMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(`Min: ${someArrMin}`);
console.log(`Max: ${someArrMax}`);

let randomNumber;
randomNumber = parseFloat(Math.random().toFixed(2));
console.log(randomNumber);

let randomNumber2;
let x = 10;
randomNumber2 = Math.ceil((Math.random() * x));
console.log(randomNumber2);

// // а. Получить случайное число и округлить его до двух цифр после запятой
// const random = Number(Math.random().toFixed(2));

// // b. Получить случайное целое число от 0 до X. X - любое произвольное число.
// const X = 20;
// const randomX = Math.round(Math.random() * X);
// console.log(randomX);

let someValue;
someValue = 0.6 + 0.7;
someValue = parseFloat(someValue.toFixed(1));
console.log(someValue);

let someString = '100$';
console.log(parseInt(someString));







