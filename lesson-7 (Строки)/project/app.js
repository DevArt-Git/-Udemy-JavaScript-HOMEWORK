const firstName = 'Artem';
const lastName = 'Fedorov';
const age = 30;
let str = 'Hello, my name is Artem';

let value;

value = firstName + lastName;
value = firstName + ' ' + lastName;
value += ' I am ' + age;
value = firstName.length;
value = firstName[2];
value = firstName[firstName.length - 1];

value = firstName.toUpperCase();
value = firstName.concat(' ', lastName);

value = str.indexOf('!');
value = str.includes('my');

value = str.slice(0, -5);
value = str.replace('Artem', 'Den');
console.log(value);

// Шаблонные строки:

const newFirstName = 'Artem';
const newLastName = 'Fedorov';
const newAge = 30;

let newStr;

// newStr = '<ul>' +
//     '<li>First name: ' + newFirstName + '</li>' +
//     '<li>Last name: ' + newLastName + '</li>' +
//     '<li>Age: ' + newAge + '</li>' +
//     '</ul>'
// console.log(newStr);

//  ES 6
newStr = `
    <ul>
        <li>First name: ${newFirstName}</li>
        <li>Last name: ${newLastName}</li>
        <li>Age: ${newAge}</li>
        <li>Math.random: ${Math.random()}</li>
        <li>5 + 5 = ${5 + 5}</li>
    </ul>
`;
document.body.innerHTML = newStr;

// Задачи:

let string = 'some test string';
console.log(`Первая буква: ${string[0]}`); // Первая
console.log(`Последняя буква: ${string[string.length - 1]}`); // Последняя
console.log(`Первая буква: ${string[0].toUpperCase()}`); // Первая
console.log(`Последняя буква: ${string[string.length - 1].toUpperCase()}`); // Последняя
console.log(string.indexOf('string')); // Положение слова (начальный индекс)
console.log(string.lastIndexOf(' ')); // Положение пробела
// const secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(string.substr(5, 4)); // С 5го длина 4
console.log(string.slice(5, 9));

let newString = string.slice(0, -6);
console.log(newString);

let a = 20;
let b = 16;
// let c = `${a}${b}`;
let c = String(a) + String(b);
console.log(c);









