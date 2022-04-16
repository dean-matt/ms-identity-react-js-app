# ms-identity-react-js-app

This Single Page Application uses [MSAL React](https://www.npmjs.com/package/@azure/msal-react) to login, logout, conditionally render components to authenticated users, and acquire an access token for a protected resource in Microsoft Graph.

It was created following this tutorial on Microsoft's website:

https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react

To gain further understanding of React and MSAL React, the tutorial was modified as follows:

- Both types of sign in (Popup and Redirect) are allowed
- Buttons for both API requests (Access Token and Graph API) are allowed
- Colors and themes were adjusted