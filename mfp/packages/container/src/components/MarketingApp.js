import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
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
        // console.log("Container rendered")
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: historyCallbackFunction
        })
        history.listen((...params) => {
            console.log("Container Location", history.location.pathname)
            onParentNavigate(...params)
        });
    }, [])
    return <div ref={ref}></div>
}