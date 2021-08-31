import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Announcements from './Announcements/Announcements';
import './App.css';
import UpdateSite from './UpdateSite/UpdateSite';
import NavBar from './NavBar/NavBar';


class App extends Component {
  render(){
    return (
      <Router basename="/rms-agenda/">
          <Suspense>

            <Route exact path="/" component={UpdateSite} />
            <Route exact path="/announcements" component={Announcements} />
            <Route exact path="/announcements" component={NavBar} />
          </Suspense>
      </Router>
    
    );
  }
  
}

export default App;
