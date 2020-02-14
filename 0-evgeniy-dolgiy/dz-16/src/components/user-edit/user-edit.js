import React, { Component } from 'react';

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEdit: this.props.user
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate', prevProps.user.name !== this.props.user.name, prevProps.user, this.state.userEdit);
    if (prevProps.user.name !== this.props.user.name) {
      this.setState({userEdit: prevProps.user});
    }
  }
  
  handleChange(event) {
    let userEdit = this.state.userEdit;
    userEdit[event.target.name] = event.target.value;
    this.setState({userEdit: userEdit}, () => {
      console.log('setState', this.state.userEdit);
    });
    console.log('after setState', this.state.userEdit);
  }
  
  saveUser =() => {
    return () => {
      if (this.props.saveUser) {
        this.props.saveUser();
      }
    }
  }
  
  render() {
    return (<div>
      <h1>User Edit</h1>
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
      <div>
        <button onClick={this.saveUser()}>Save</button>
      </div>
    </div>);
  }
}

export default UserEdit;
