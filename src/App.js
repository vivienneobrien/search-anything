import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Quotes from './pages/Quotes'
import Images from './pages/Images'
import Videos from './pages/Videos'
import Layout from "./layouts/Layout.component"
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme.styles";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Quotes />
        </Route>
        <Route exact path="/images">
          <Images />
          </Route>
          <Route exact path="/videos">
          <Videos/>
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;