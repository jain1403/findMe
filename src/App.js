import React from 'react';
import './App.css';
import findMe from './container/find-me/find-me'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="containerMain">
      <Router>
        <Switch>
          <Route path="/" exact component={findMe}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;