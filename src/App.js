import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

 const App = () => {
  return (
    <div>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  )
}

export default App;
