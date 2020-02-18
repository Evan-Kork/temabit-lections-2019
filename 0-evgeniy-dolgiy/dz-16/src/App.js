import React from 'react';
import UserList from './components/user-list/user-list';
import UserInfo from './components/user-info/user-info';
import UserEdit from './components/user-edit/user-edit';

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
        <UserList
          selectUser={this.selectUser}
        />
        <UserInfo
          setEditUserMode={this.setEditUserMode}
         />
        <UserEdit/>
      </div>);
  }
}

export default App;
