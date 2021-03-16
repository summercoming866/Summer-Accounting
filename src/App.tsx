import React from 'react';
// import Layout from './components/Layout'
import Tags from './views/Tags'
import Money from './views/Money'
import Statistics from './views/Statistics'
import NoMatch from './views/NoMatch'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
        <Redirect exact from="/" to="/money" />
      </Switch>
    </Router >
  );
}



export default App;
