import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/home/home';
import SearchTtn from './components/pages/search-ttn/search-ttn';
import Info from './components/pages/info/info';
import Departments from './components/pages/departments/departments';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Route path='/' component={Header} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search-ttn/:TTN' component={SearchTtn} />
          <Route path='/departments-:type' component={Departments} />
          <Route path='/info' component={Info} />
          <Redirect to='/' />
        </Switch>
        <Route path='/' component={Footer} />
      </HashRouter>
    </div>
  );
}

export default App;
