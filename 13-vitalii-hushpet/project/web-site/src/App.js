import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import IndexFile from './component/main'
import FindPacket from './component/find'
import BranchesLocator from './component/branches_locator'
import BranchesLocatorId from './component/branches_locator_id'
import Callck from './component/collck'
import DepInfo from './component/department_info'
import FindInput from './component/find_input'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={IndexFile}/>
        <Route exact path="/find:id" component={FindPacket}/>
        <Route exact path="/find" component={FindInput}/>
        <Route exact path="/branches_locator" component={BranchesLocator}/>
        <Route exact path="/branches_locator_id:id" component={BranchesLocatorId}/>
        <Route exact path="/callck" component={Callck}/>
        <Route exact path="/department_info:id" component={DepInfo}/>
      </HashRouter>
    </div>
  )
}

export default App;
