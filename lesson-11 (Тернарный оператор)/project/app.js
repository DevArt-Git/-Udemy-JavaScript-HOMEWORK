let a = 1;
let b = 0;

// if (a > 0) {
//     b = a;
// } else {
//     b += 1;
// }

// выражение ? если true : если false;
// выражение ? если true : выражение ? если true : если false;
b = a > 0 ? a : b + 1;

b = a > 0 ? 2 : a < 0 ? 3 : 0;

console.log(`b: ${b}`);

let color = 'white';

switch (color) {
    case 'yellow':
        console.log('Color is yellow');
        break;
    case 'red':
        console.log('Color is red');
        break;
    default:
        console.log('Default');
}

// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let result;
result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);

let message;
let login;
message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';

// Задачи
let abc = "none";
switch (abc) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break
    case 'inline':
        console.log('inline');
        break
    default:
        console.log('other');
}
//
let someValue = 'hidden';
switch (someValue) {
    case 'hidden':
        someValue = 'visible';
        break;
    default:
        someValue = 'hidden';
        break;
}
console.log(someValue);

(function () {
    let someValue = 'hidden';
    someValue = someValue === 'hidden' ? 'visible' : 'hidden';
    console.log(someValue);
}())

let c = 0;
c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;
console.log(c);

