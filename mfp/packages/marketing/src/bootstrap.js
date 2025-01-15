import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, {
    onNavigate,
    defaultHistory
}) => {
    if (el) {
        const history = defaultHistory || createMemoryHistory();
        console.log("Marketing", history)

        if (onNavigate) {
            // console.log("Marketing onNavigate")
            // onNavigate(history.location);

            history.listen((...params) => {
                console.log("Marketing Location", history.location.pathname)
                onNavigate(...params);
            });
        }

        ReactDOM.render(
            <App history={history} />,
            el
        )

        return {
            onParentNavigate({ pathname: nextPathName }) {
                console.log("Marketing", nextPathName, "callback")
                const { pathname } = history.location;
                if (pathname !== nextPathName) {
                    history.push(nextPathName);
                }
            }
        }
    }
}

if (process.env.NODE_ENV == "development") {
    const devRoot = document.querySelector("#_marketing-dev-root");
    if (devRoot) {
        console.log("Container", devRoot)
        mount(devRoot, {
            defaultHistory: createBrowserHistory()
        });
    }
}

export { mount }