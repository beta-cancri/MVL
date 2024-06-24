import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from './views/home/Home';
import About from './views/about/About';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';
import Landing from './views/landing/Landing';
import Profile from './views/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="app-container">
      {!isLandingPage && <Navbar />}
      <div className="main-content">
        {!isLandingPage && <Sidebar />}
        <div className="content">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/create" component={Create} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
