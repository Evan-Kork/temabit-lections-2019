import './scss/app.scss';
import * as React from 'react';
import Home from './components/pages/home/home';
import TrackingTtn from './components/pages/tracking-ttn/tracking-ttn'
import Branches from './components/pages/branches/branches';
import BranchesList from './components/pages/branches-list/branches-list';
import NewTest from './components/pages/newtest/newtest'
import { HashRouter, Route, Switch } from 'react-router-dom';
import "reflect-metadata";
import "es6-shim";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tracking-ttn" component={TrackingTtn} />
          <Route path="/viddilennya" component={Branches} />
          <Route path="/spisok-viddilen" component={BranchesList} />
          <Route path="/test" component={NewTest}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;