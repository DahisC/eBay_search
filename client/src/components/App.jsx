import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';

import Background from './Background';
import Home from './Home';
import SearchPage from './SearchPage';

const App = () => (
  <React.Fragment>
    <Background />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
