import * as React from "react";
import { render } from "react-dom";

import Page from "./Page";
import RecipesContainer from "./RecipesContainer";

const initializeApp = () => {
  render(<App />, document.querySelector("main"));
};

const App = () => (
  <Page>
    {pageProps => {
      return (
        <section>
          <h1>{pageProps.type}</h1>
          <h2>{"Let's eat..."}</h2>

          <section>
            <RecipesContainer />
          </section>
        </section>
      );
    }}
  </Page>
);

initializeApp();

export default App;
