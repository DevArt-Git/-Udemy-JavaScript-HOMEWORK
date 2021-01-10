const user = {
    firstName: 'Artem',
    age: 30,
    isAdmin: true,
    email: 'test@test.com',
    'user-address': {
        city: 'Kiev'
    },
    skills: ['html', 'css', 'js']
}

let value;
let prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0];

console.log(value);
console.log(user);

// Задания:

let cellPhone = {
    product: 'iPhone'
}

cellPhone.price = 1000;
cellPhone.currency = 'dollar';
// или 
// item['price'] = 1000;
// item['currency'] = "dollar";
cellPhone.details = {};
cellPhone.details.model = '11 Pro';
cellPhone.details.color = 'Gold';


console.log(cellPhone);
