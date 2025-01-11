// import faker from 'faker';

// let products = '';


// for (let i = 0; i < 5; i++) {
//     const name = faker.commerce.productName();
//     products += `<li>${name}</li>`;
// }
// document.querySelector('#products-list').innerHTML = products;

import { mount } from 'products/ProductsIndex';

// import 'cart/CartIndex';
import { mount as mountCart } from 'cart/CartIndex';

mount(document.querySelector('#products-list'));
mountCart(document.querySelector('#cart-list'));
console.log("Container");


