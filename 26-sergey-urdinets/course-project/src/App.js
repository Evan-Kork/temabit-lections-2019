import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import DepartmentsList from './components/pages/departments-list/departments-list';
import DepartmentsMap from './components/pages/departments-map/departments-map';
import Home from './components/pages/home/home';
import SearchTtn from './components/pages/search-ttn/search-ttn';
import Info from './components/pages/info/info';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Route path='/' component={Header} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search-ttn/:TTN' component={SearchTtn} />
          <Route path='/departments-list' component={DepartmentsList} />
          <Route path='/departments-map' component={DepartmentsMap} />
          <Route path='/info' component={Info} />
          <Redirect to='/' />
        </Switch>
        <Route path='/' component={Footer} />
      </HashRouter>
    </div>
  );
}

export default App;
