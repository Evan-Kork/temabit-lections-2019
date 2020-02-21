import React from 'react';
import UserList from './components/user-list/user-list';
import UserInfo from './components/user-info/user-info';
import UserEdit from './components/user-edit/user-edit';
import NotFoundPage from './components/not-found-page/not-found-page';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: [],
      selectedUser: null,
      editUserMode: false
    };
    // this.selectUser = this.selectUser.bind(this);
  }
  
  selectUser = (index) => {
    this.setState({selectedUser : index});
  };
  
  setEditUserMode = () => {
    console.log('setEditUserMode', this.state.editUserMode);
    this.setState({editUserMode : !this.state.editUserMode});
  };
  
  saveUser =(user) => {
    let userList = this.state.userList;
    userList[this.state.selectedUser] = user;
    this.setState({userList});
  }
  
  render () {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={UserList}/>
            <Route path="/user/:userID" component={UserInfo} />
            <Route path="/user-edit/:userID" component={UserEdit} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          {/*<UserList
            selectUser={this.selectUser}
          />
          <UserInfo
            setEditUserMode={this.setEditUserMode}
           />
          <UserEdit/>*/}
        </HashRouter>
      </div>);
  }
}

export default App;
