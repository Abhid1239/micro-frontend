import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
    const ref = useRef();
    const history = useHistory();
    useEffect(() => {
        const historyCallbackFunction = ({ pathname: nextPathName }) => {
            console.log("Container", nextPathName)
            const { pathname } = history.location;
            if (pathname !== nextPathName) {
                history.push(nextPathName);
            }
        }
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: historyCallbackFunction,
            onSignIn
        })
        history.listen((...params) => {
            console.log("Container Location", history.location.pathname)
            onParentNavigate(...params)
        });
    }, [])
    return <div ref={ref}></div>
}