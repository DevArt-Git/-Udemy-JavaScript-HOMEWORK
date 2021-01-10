let value;

value = 1 > 2;
value = 1 == 1;
value = 1 == '1';
value = 1 === '1';
value = 'A' > 'a';
value = 'A'.charCodeAt();

// console.log(value);

value = 10;

if (value !== 10) {
    console.log('value: 10');
} else {
    console.log('else');
}

value = 100

if (value) {
    console.log('some action', value);
} else {
    console.log('else', value);
}

let serverNickName = 'Denis';
let nickName = serverNickName || 'default nickname';

console.log(nickName);

// Задачи:

(function () { // Анонимная функция 
    let a;
    a = 0 || 'string'; // ==> string - Запинается на 'true' (Возвращает первый true) 
    console.log(a);

    a = 1 && 'string'; // ==> string - Запинается на 'false'. Если нет 'false' - возвращает последний 'true' (оригинальное значение операнда)
    console.log(a);

    a = null || 25; // ==> 25 - Запинается на 'true'. (Возвращает первый true)
    console.log(a);

    a = null && 25; // ==> null - Запинается на 'false'
    console.log(a);

    a = null || 0 || 35; // ==> 35 - Запинается на 'true' (Возвращает первый true)
    console.log(a);

    a = null && 0 && 35; // ==> Запинается на 'false' (Возвращает первый false)
    console.log(a);
})();

(function () { // Анонимная функция
    let a;
    a = 12 + 14 + '12'; // ==> 2612 - число 26 преобразуется в строку при сложении со строкой "12" 
    console.log(a);
    a = 3 + 2 - '1'; // ==> 4 - при вычитании строки "1" происходит преобразование к числовому типу
    console.log(a);
    a = '3' + 2 - 1; // ==> 31 - число преобразуется в строку при сложении со строкой
    console.log(a);
    a = true + 2; // ==> 3 - 'true' в булевом это 1 
    console.log(a);
    a = +'10' + 1; // ==> 11 - строка "10" преобразовывается к числовому типу
    console.log(a);
    a = undefined + 2; // ==> NaN - underfiend в числовом виде это NaN
    console.log(a);
    a = null + 5; // ==> 5 - null в числовом виде это 0
    console.log(a);
    a = true + undefined; // ==> NaN - underfiend в числовом виде это NaN
    console.log(a);
})();

(function () {
    let someVar = 'hidden';

    if (someVar === 'hidden') {
        someVar = 'visible'
        console.log('Now it is', someVar);
    } else {
        someVar = 'hidden';
        console.log(someVar);
    }
}())

let someVar = 5;

if (someVar === 0) {
    someVar = 1;
} else if (someVar < 0) {
    someVar = 'less then zero';
} else {
    someVar *= 10;
}
console.log(someVar);

let car = {
    name: 'Lexus',
    age: 6,
    create: 2008,
    needRepair: false
}

if (car.age > 5) {
    console.log('Need repair!');
    car.needRepair = true;
} else {
    car.needRepair = false
}

// // Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть
// поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и
// записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и
// price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount
// нет то вывести просто поле price в консоль.

let item = {
    name: 'Intel core i7',
    price: '250$',
    discount: '25%'
}
console.log(item);
if (item.discount && item.discount !== NaN && item.price !== NaN) {
    item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) / 100 * parseInt(item.discount));
    console.log(item);
} else {
    console.log(item.price);
}

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной
// цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10;
let max = 20;

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
} else {
    console.log('Товаров не найдено');
}