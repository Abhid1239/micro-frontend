import faker from 'faker';

let products = `The number of items in the cart is ${faker.random.number()}`;

document.querySelector('#cart-list').innerHTML = products;

