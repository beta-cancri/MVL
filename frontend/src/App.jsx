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
import TestComponent from './components/TestComponent';  // Import the TestComponent
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

  console.log(`Rendering AppContent. isLandingPage: ${isLandingPage}`);

  return (
    <div className="app-container">
      {!isLandingPage && <Navbar />}
      <div className={`main-content ${isLandingPage ? 'no-sidebar' : ''}`}>
        {!isLandingPage && <Sidebar />}
        <div className={`content ${isLandingPage ? '' : 'contentWithSidebar'}`}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/create" component={Create} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/profile" component={Profile} />
            <Route path="/test" component={TestComponent} />  // Add the test route
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
