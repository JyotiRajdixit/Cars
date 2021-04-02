import React from 'react';
import Car from './Car.jsx';
import CarDetails from './CarDetails.jsx';
import CompareCars from './CompareCars.jsx';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Car} />
          <Route path="/car" exact component={Car} />
          <Route path="/car/:id" component={CarDetails} />
          <Route path="/comparecars" component={CompareCars} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
/*
<Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Car} />
          <Route path="/car" exact component={Car} />
          <Route path="/car/:id" component={CarDetails} />
          <Route path="/comparecars" component={CompareCars} />
        </Switch>
      </div>
    </Router>
    */
