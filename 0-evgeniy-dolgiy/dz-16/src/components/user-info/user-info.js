import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  
  setEditUserMode() {
    return () => {
      if (this.props.setEditUserMode) {
        this.props.setEditUserMode();
      }
    }
  }
  render() {
    return (<div>
      <h1>User Info</h1>
      <div>
        <span>Name</span>
        <span>{this.props.userInfo.name}</span>
      </div>
      <div>
        <span>Surname</span>
        <span>{this.props.userInfo.surname}</span>
      </div>
      <div>
        <button onClick={this.setEditUserMode()}>Edit</button>
      </div>
    </div>);
  }
}

export default UserInfo;
