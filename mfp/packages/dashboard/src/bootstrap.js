import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
    console.log("Dashboard", el);
    if (el) {
        const app = createApp(Dashboard);

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