import React from "react";
import { PageLayout } from "./components/PageLayout";

function App() {
  return (
    <PageLayout>
      <div style={{ "padding": "0px 100px 50px 100px" }}>
        <p>
          This Single Page Application uses&nbsp;
          <a href="https://www.npmjs.com/package/@azure/msal-react">
            MSAL React
          </a>
          &nbsp;to login, logout, conditionally render components to authenticated users, and acquire an access token for a protected resource in Microsoft Graph.
        </p>
        <p>It was created following this tutorial on Microsoft's website:</p>
        <p>
          <a href="https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react">
            https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
          </a>
        </p>
      </div>
    </PageLayout>
  );
}

export default App;
