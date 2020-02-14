import React from 'react';
import UserList from './components/user-list/user-list';
import UserInfo from './components/user-info/user-info';
import UserEdit from './components/user-edit/user-edit';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: [
        {
          name: 'Evgeniy1',
          surname: 'Dolgiy1'
        },
        {
          name: 'Evgeniy2',
          surname: 'Dolgiy2'
        },
        {
          name: 'Evgeniy3',
          surname: 'Dolgiy3'
        },
        {
          name: 'Evgeniy4',
          surname: 'Dolgiy4'
        }
      ],
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
          userList={this.state.userList}
          selectUser={this.selectUser}
        />
        { this.state.selectedUser !== null ? 
          <UserInfo
            userInfo={this.state.userList[this.state.selectedUser]}
            setEditUserMode={this.setEditUserMode}
           />: null
        }
        { this.state.editUserMode ?
          <UserEdit
            user={this.state.userList[this.state.selectedUser]}
          /> : null}
      </div>);
  }
}

export default App;













// import React from 'react';
// // import React { Component } from 'react';
// import UserList from './components/user-list/user-list';
// import UserInfo from './components/user-info/user-info';
// import UserEdit from './components/user-edit/user-edit';

// class App extends React.Component {
// // class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Evgeniy',
//       surname: 'Dolgiy'
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <UserList />
//         <UserInfo />
//         <UserEdit />
//       </div>
//     );
//   }
// }

// export default App;
