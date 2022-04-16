import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

function handlePopupLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

function handleRedirectLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton_Popup = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handlePopupLogout(instance)}>Sign out using Popup</Button>
    );
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton_Redirect = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleRedirectLogout(instance)}>Sign out using Redirect</Button>
    );
}