import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

function handlePopupLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

function handleRedirectLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton_Popup = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handlePopupLogin(instance)}>Sign in using Popup</Button>
    );
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton_Redirect = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleRedirectLogin(instance)}>Sign in using Redirect</Button>
    );
}