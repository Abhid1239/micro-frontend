import { loadRemoteModule } from './utils/ErrorBoundary';

async function initializeApp() {
    try {
        const productsElement = document.querySelector('#products-list');
        const cartElement = document.querySelector('#cart-list');

        if (productsElement) {
            const { mount } = await loadRemoteModule(() => import('products/ProductsIndex'));
            mount(productsElement);
        } else {
            console.warn('Products mount element not found');
        }

        if (cartElement) {
            const { mount: mountCart } = await loadRemoteModule(() => import('cart/CartIndex'));
            mountCart(cartElement);
        } else {
            console.warn('Cart mount element not found');
        }
    } catch (error) {
        console.error('Failed to initialize application:', error);
        // You might want to show a user-friendly error message here
        document.body.innerHTML += `<div class="error-message">Something went wrong loading the application.</div>`;
    }
}

initializeApp();


