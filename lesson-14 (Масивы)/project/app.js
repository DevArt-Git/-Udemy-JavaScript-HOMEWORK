const numArr = [2, 32, 1234, 54, 323];
let value;

value = numArr.length;
console.log(value);

value = Array.isArray(numArr); // Проверка на массив
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(32);

value = numArr.push(100); // в конец добавить
value = numArr.pop(); // с конца убрать
value = numArr.unshift(111); // в начало добавить
value = numArr.shift(); // с начала убрать
value = numArr.slice(0, 2); // slice() - копирует текущий массив
value = numArr.splice(1, 0, 'one', 'two');
// value = numArr.reverse(); // переворачивает и изменяет массив
// value = numArr.concat(numArr); // копирует текущий массив и добавляет что записано в ()
// value = numArr.join(' ');// делает из массива строку
// value = 'hello world'.split() // делает массив из строки
console.log(value, numArr);
