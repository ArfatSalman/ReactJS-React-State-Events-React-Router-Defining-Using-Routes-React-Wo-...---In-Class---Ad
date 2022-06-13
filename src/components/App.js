import '../styles/App.css';
import React, { Component, useState } from 'react';
import { Route, Link, Switch, useLocation } from 'react-router-dom';

function Home() {
  return 'You are home';
}

function About() {
  return 'You are on the about page';
}

function NoMatch() {
  return 'No match';
}

export function LocationDisplay() {
  const location = useLocation();

  return <p data-testid="location-display">{location.pathname}</p>;
}

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="*" exact component={NoMatch} />
        </Switch>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;
