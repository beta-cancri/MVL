import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
