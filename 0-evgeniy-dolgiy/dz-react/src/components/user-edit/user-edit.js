import React, { Component } from 'react';

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEdit: {
        name: 'Evgeniy',
        surname: 'Dolgiy'
      }
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let userEdit = this.state.userEdit;
    userEdit[event.target.name] = event.target.value;
    this.setState({userEdit: userEdit}, () => {
      console.log('setState', this.state.userEdit.name);
    });
    console.log('after setState', this.state.userEdit.name);
  }
  
  render() {
    return (<div>
      <h1>User Info</h1>
      <div>
        <span>Name</span>
        <input
          name="name"
          value={this.state.userEdit.name}
          onChange={this.handleChange}
        />
      </div>
      <div>
        <span>Surname</span>
        <input
          name="surname"
          value={this.state.userEdit.surname}
          onChange={this.handleChange}
        />
      </div>
    </div>);
  }
}

export default UserEdit;
