import React from 'react';
import './style/App.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../pages/main/Main';

import Calculator from '../pages/calculator/Calculator';
import Department from '../pages/department/Department';
import ListDepartment from '../pages/list-department/ListDepartment';
import Traking from '../pages/tracking/Traking';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component{
  render(){
    return ( 
      // <div className="App">
        <Router>
          <Header />
            <main>
                <Route exact path='/' component={Main} />
                <Route path='/rozrahunok-vartosti' render={ () => <Calculator />} />
                <Route path='/viddilennya' render={ () => <Department />} />
                <Route path='/spisok-viddilen' render={ () => <ListDepartment />} />
                <Route path='/tracking' render={ () => <Traking />} />
            </main>
          <Footer />
        </Router>
      // </div>
    );
  }
}

export default App;
