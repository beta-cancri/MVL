import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';
import About from './views/about/About';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';
import Landing from './views/landing/Landing';
import Profile from './views/profile/Profile';
import Layout from './layout/Layout';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          render={() => (
            <Layout>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/create" component={Create} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
