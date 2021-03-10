import React from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import theme from "utils/theme";
import GlobalStyles from './index.css.js';

import {Navigation} from "components";



function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles/>

          <BrowserRouter>
              <Navigation items={[
                  {content: 'Homepage', to: '/'},
                  {content: 'Budget page', to: '/budget'},
              ]}/>
              <Switch>
                  <Route exact path="/">Home page</Route>
                  <Route exact path="/budget">Budget page</Route>
              </Switch>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
