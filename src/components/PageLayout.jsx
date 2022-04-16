import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { SignInButton_Popup, SignInButton_Redirect } from "./SignInButton";
import { SignOutButton_Popup, SignOutButton_Redirect } from "./SignOutButton";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    return (
        <div style={{ "backgroundColor": "#111111", "color": "white", "height": "100vh" }}>
            <Navbar bg="dark" variant="dark">
                <a className="navbar-brand" href="/" style={{ "padding": "0px 10px" }}>MSAL React Tutorial</a>
                <UnauthenticatedTemplate>
                    <span style={{ "display": "flex", "justifyContent": "flex-end", "margin": "0px 10px", "width": "100%" }}>
                        <SignInButton_Popup />
                        <span style={{ "width": "10px" }}></span>
                        <SignInButton_Redirect />
                    </span>
                </ UnauthenticatedTemplate>
                <AuthenticatedTemplate>
                    <span style={{ "display": "flex", "justifyContent": "flex-end", "margin": "0px 10px", "width": "100%" }}>
                        <SignOutButton_Popup />
                        <span style={{ "width": "10px" }}></span>
                        <SignOutButton_Redirect />
                    </span>
                </ AuthenticatedTemplate>
            </Navbar>
            <div style={{ "padding": "50px 25px 25px 25px" }}>
                <h5 style={{ "marginBottom": "25px" }}>
                    <center>Welcome to the Microsoft Authentication Library For React Tutorial</center>
                </h5>
                {props.children}
                <AuthenticatedTemplate>
                    <ProfileContent />
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <h3 style={{ "textAlign": "center" }}>Please sign in</h3>
                </UnauthenticatedTemplate>
            </div>
        </div>
    );
};

function ProfileContent() {
    const { instance, accounts, inProgress } = useMsal();
    const [accessToken, setAccessToken] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestAccessToken() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken);
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken);
            });
        });
    }

    return (
        <div style={{ "padding": "0px 100px 25px 100px" }}>
            <div style={{ "backgroundColor": "gray", "width": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center", "padding": "10px", "borderRadius": "5px" }}>
                <h5 className="card-title" style={{ "width": "100%", "textAlign": "center", "paddingBottom": "10px", "marginBottom": "25px", "borderBottom": "1px solid #FFFFFF88" }}>
                    Welcome&nbsp;
                    <b style={{ "color": "#33DD33" }}>{name}</b>
                </h5>
                {accessToken ?
                    <p>Access Token Acquired!</p>
                    :
                    <Button variant="primary" onClick={RequestAccessToken}>Request Access Token</Button>
                }
            </div>
        </div>
    );
};