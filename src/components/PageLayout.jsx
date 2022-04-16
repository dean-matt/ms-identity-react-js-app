import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { SignInButton_Popup, SignInButton_Redirect } from "./SignInButton";
import { SignOutButton_Popup, SignOutButton_Redirect } from "./SignOutButton";

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
                    <h3 style={{ "textAlign": "center" }}>You are signed in!</h3>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <h3 style={{ "textAlign": "center" }}>Please sign in</h3>
                </UnauthenticatedTemplate>
            </div>
        </div>
    );
};