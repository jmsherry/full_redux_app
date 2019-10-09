import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// // import Link from '@material-ui/core/Link';
// import ProTip from './ProTip';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

import Home from './pages/Home'
import Shop from './pages/Shop'
import Cupboard from './pages/Cupboard'
import Meals from './pages/Meals'

const reduxStore = configureStore();

export default function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/cupboard" component={Cupboard} />
        <Route path="/meals" component={Meals} />
        {/*<Route path="/meals" component={Meals} /> */}
      </Router>
    </ReduxProvider>
  );
}
