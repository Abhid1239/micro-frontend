import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";


import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';  // theme
import 'primevue/resources/primevue.min.css';           // core css
import 'primeicons/primeicons.css';                     // icons
import 'primeflex/primeflex.css';
const mount = (el) => {
    console.log("Dashboard", el);
    if (el) {
        const app = createApp(Dashboard);
        app.use(PrimeVue)
        app.mount(el);
    }
}

if (process.env.NODE_ENV == "development") {
    const devRoot = document.querySelector("#_dashboard-dev-root");
    console.log("Dashboard", devRoot);

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount }