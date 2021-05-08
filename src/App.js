import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolio from './portfolio'
import Nft from './nft'
// import About from './about_jsx'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/nft" component={Nft} />
          {/* <Route exact path="/about" component={About} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
