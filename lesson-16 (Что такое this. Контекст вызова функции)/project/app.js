function getThis() {
    console.log(this);
}
function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
}
function getName() {
    console.log(this.name);
    return this;
}
const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice() {
        console.log(this.price);
    },
    getName() {
        console.log(this.name);
    },
    info: {
        information: ['2.3ghz'],
        getInfo() {
            console.log(this);
        }
    }
}
const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice
};
prod1.getPrice();
prod1.info.getInfo();
prod2.getPrice();
prod1.getName();
prod2.getName = prod1.getName;
prod2.getName();

let str = 'Hello world';
const reverseStr = str
    .split("") // Вернет массив ['H', 'e', ...]
    .reverse() // Переворачивает ['d', 'l' ...]
    .join(""); // Вернет строку 'dlrow olleH'
console.log(reverseStr);

const prod3 = {
    name: 'AMR',
    price: 250,
    getPrice,
    getName
};
prod3
    .getName() // prod3
    .getPrice(); // prod3.getPrice()

const prod4 = {
    name: 'AMR',
    price: 455,
};

getPrice.call(prod4, 'RUB');

const getPriceBind = prod3.getPrice.bind(prod3) // Возвращает функцию с привязанным контекстом.
setTimeout(getPriceBind, 500);

// Задачи
// 1.
let rectangle = {
    width: 35,
    height: 15,
    getSquare() {
        return parseFloat(this.width) * parseFloat(this.height);
    }
}
console.log(`Площадь прямоугольника равна: ${rectangle.getSquare()}`);
// 2.
const item = {
    price: 10,
    discount: '15%',
    getPrice() {
        return parseFloat(this.price);
    },
    getPriceWithDiscount() {
        return parseFloat(this.price) - parseFloat(this.price) * parseFloat(this.discount) / 100;
    }
}
console.log(item.getPrice());
console.log(item.getPriceWithDiscount());
// 3. 
const someObject = {
    height: '12',
    increaseHeight() {
        return parseFloat(++this.height);
        // parseFloat(this.height)++;
    }
}
console.log(someObject.increaseHeight());
// 4. 
const numerator = {
    value: 1,
    double() {
        parseInt(this.value * 2);
        return this;
    },
    plusOne() {
        parseInt(++this.value);
        return this;
    },
    minusOne() {
        parseInt(--this.value);
        return this;
    }
}
console.log(numerator.double().minusOne());




