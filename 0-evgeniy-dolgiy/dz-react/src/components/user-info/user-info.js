import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Evgeniy',
        surname: 'Dolgiy'
      }
    };
  }
  render() {
    return (<div>
      <h1>User Info</h1>
      <div>
        <span>Name</span>
        <span>{this.state.userInfo.name}</span>
      </div>
      <div>
        <span>Surname</span>
        <span>{this.state.userInfo.surname}</span>
      </div>
    </div>);
  }
}

export default UserInfo;
