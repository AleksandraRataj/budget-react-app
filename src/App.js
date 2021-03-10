import React from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import theme from "utils/theme";
import GlobalStyles from './index.css.js';

import {Navigation, Wrapper} from "components";



function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles/>

          <BrowserRouter>
              <Navigation items={[
                  {content: 'Homepage', to: '/'},
                  {content: 'Budget page', to: '/budget'},
              ]}
              RightElement={(
                  <div>
                      <button>pl</button>
                      <button>eng</button>
                  </div>
              )}
              />
              <Wrapper>
                  <Switch>
                      <Route exact path="/">Home page</Route>
                      <Route exact path="/budget">Budget page</Route>
                  </Switch>
              </Wrapper>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
