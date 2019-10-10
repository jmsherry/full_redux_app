import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

import Home from './pages/Home'
import Shop from './pages/Shop'
import Cupboard from './pages/Cupboard'
import Meals from './pages/Meals'
import Test from './pages/Test'
import NotFound from './pages/NotFound'

const reduxStore = configureStore();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={reduxStore}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/cupboard" component={Cupboard} />
            <Route path="/meals" component={Meals} />
            <Route path="/test" component={Test} />
            {/*<Route path="/meals" component={Meals} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ReduxProvider>
    </ThemeProvider>
  );
}
