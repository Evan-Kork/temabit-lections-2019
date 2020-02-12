import React from 'react';
import UserList from './components/user-list/user-list';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <UserList />
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
