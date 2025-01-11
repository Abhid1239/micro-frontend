import faker from 'faker';



const mount = (el) => {


    let products = `The number of items in the cart is ${faker.random.number()}`;

    el.innerHTML = products;


}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    if (el) {
        mount(el);
    }
}

export { mount };