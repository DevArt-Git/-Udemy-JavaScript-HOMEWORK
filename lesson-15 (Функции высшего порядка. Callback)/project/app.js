// function foo() {
//     console.log('Hello');
// }
// foo();

const names = ['Den', 'Ivan', 'Maks', 'Denis'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}
function nameLenght(el) {
    return el.length;
}
function nameToUpperCase(el) {
    return el.toUpperCase();
}
const result = mapArray(names, nameLenght);
const result2 = mapArray(names, nameToUpperCase);
console.log(result);
console.log(result2);
//

function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}

const testGreeting = greeting('Artem');
const fullName = testGreeting('Chern')
const fullNameAnotherWay = greeting("Egor")("Nosov");
console.log(fullName);
console.log(fullNameAnotherWay);
// еще один пример

function question(job) {
    const jobDictionary = {
        developer: 'что такое JavaScript',
        teacher: 'какой предмет вы ведете'
    }
    return function (name) {
        return `${name}, ${jobDictionary[job]}?`;
    };
}
const developerQuestion = question('developer')('Denis');
console.log(developerQuestion);
const teacherQuestion = question('teacher')('Anna');
console.log(teacherQuestion);


// еще один пример

// Мы создаем шаблон функции, которая возвращает другую функцию. 
// Затем, мы задаем эту только что возвращенную функцию, исключив один атрибут, 
// как кастомную имплементацию шаблона функции. 
// Все созданные этим образом функции наследуют один и тот же код из шаблона функции, 
// однако могут по умолчанию получить различные аргументы.
var attitude = function (original, replacement, source) {
    return function (source) {
        return source.replace(original, replacement);
    };
};
console.log(attitude);
var snakify = attitude(/millenials/ig, "Snake People");
console.log(snakify);
var hippify = attitude(/baby boomers/ig, "Aging Hippies");
console.log(hippify);
console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.

// еще один пример

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished() {
    console.log('Finished my homework');
}
doHomework('math', alertFinished);

// Задания: 
// Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
// callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки
function myHandlerTemplate(arr, fn) {
    let result = '';
    if (!Array.isArray(arr)) return console.log('Use only array, please');
    else {
        for (const i of arr) {
            result += fn(i);
        }
    }
    return console.log((`New value: ${result}`).trim());
}
function firstFunc(arr, fn) {
    let res = 'New value: ';

    for (let i = 0; i < arr.length; i++) {
        res += fn(arr[i]);
    }

    return res.trim();
}
function arrayToStringWithoutSpaces(el) {
    let result = '';
    for (let i = 0; i < el.length; i++) {
        if (i === 0) {
            result += el[i].toUpperCase();
        } else {
            result += el[i];
        }
    }
    return result;
}
// function handler1(el) {
//     return el[0].toUpperCase() + el.slice(1);
//   }
function multiplyOnTen(el) {
    let result = '';
    result += el * 10 + ', ';
    return result;
}
// function handler2(el) {
//     return Number(el) * 10 + ', ';
//   }
function makeSentenceFromObject(el) {
    let result = '';
    let name = '';
    let age = '';
    for (const key in el) {
        if (Object.hasOwnProperty.call(el, key)) {
            if (key === 'name') {
                name = el[key];
            } else if (key === 'age') {
                age = el[key];
            }
            result = `${name} is ${age}, `;
        }
    }
    return result;
}
// function handler3(el) {
//     return `${el.name} is ${el.age}, `
//   }
function invertedString(el) {
    let newString = '';
    for (let i = el.length; i--;) {
        newString += el[i];
    }
    return newString + ', ';
}
function handler4(el) {
    return el.split('').reverse().join('') + ', ';
}
console.log(firstFunc(['abs', '123'], handler4));

myHandlerTemplate(['my', 'name', 'is', 'Trinity'], arrayToStringWithoutSpaces); // New value: MyNameIsTrinity
myHandlerTemplate([10, 20, 30], multiplyOnTen); // New value: 100, 200, 300,
myHandlerTemplate([{ age: 45, name: 'Jhon' }, { age: 20, name: "Aaron" }], makeSentenceFromObject); // New value: Jhon is 45, Aaron is 20,
myHandlerTemplate(['abc', '123'], invertedString); // New value: cba, 321,
// 2.
// Написать аналог метода every. Создайте функцию every, она должна принимать первым
// аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом
// callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить
// число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь
// массив.
function every(arr, fn) {
    let check;
    if (!Array.isArray(arr)) return console.log('Нужен массив');
    // console.log(typeof fn);
    if (typeof fn !== 'function') return console.log('Нужна функция');
    for (let i of arr) {
        currentBooleanState = fn(i);
        if (currentBooleanState === false) {
            check = false;
            break;
        } else {
            check = true
        };
    }
    console.log(check);
}
function checkArray(el) {
    if (el > 5) {
        return true;
    } else return false
}
every([6, 7, 4], checkArray);
// function every(arr, fn) {
//   if (!Array.isArray(arr)) return new Error('The first argument expected as array');
//   if (!fn || typeof fn !== 'function') return new Error('The second argument expected as function');

//   for (let i = 0; i < arr.length; i++) {
//     if (!fn(arr[i], i, arr)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(every([1,2], function (el) {
//   return typeof el === 'number';
// }))




