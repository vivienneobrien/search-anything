import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Text from "./apis/Text";
import Images from "./apis/Images";
import Videos from "./apis/Videos";
import FilterDrawer from "./components/FilterDrawer.component";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme.styles";
import React, { useState } from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <FilterDrawer>
          <Switch>
            <Route exact path="/">
              <Text />
            </Route>
            <Route exact path="/images">
              <Images />
            </Route>
            <Route exact path="/videos">
              <Videos />
            </Route>
          </Switch>
        </FilterDrawer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
