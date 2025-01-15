import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, {
    onSignIn,
    initialPath,
    onNavigate,
    defaultHistory
}) => {
    if (el) {
        console.log("auth")
        const history = defaultHistory || createMemoryHistory({
            initialEntries: [initialPath]
        });

        if (onNavigate) {
            history.listen(onNavigate);
        }
        ReactDOM.render(
            <App history={history} onSignIn={onSignIn} />,
            el
        )

        return {
            onParentNavigate({ pathname: nextPathName }) {
                const { pathname } = history.location;
                if (pathname !== nextPathName) {
                    history.push(nextPathName);
                }
            }
        }
    }
}

if (process.env.NODE_ENV == "development") {
    const devRoot = document.querySelector("#_auth-dev-root");
    if (devRoot) {
        mount(devRoot, {
            defaultHistory: createBrowserHistory()
        });
    }
}

export { mount }