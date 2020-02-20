import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEdit: this.props.userEdit
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  static getDerivedStateFromProps(props, state) {
    return {
      userEdit: props.userEdit
    };
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps, nextState', nextProps, nextState);
    return true;
  }
  // componentDidUpdate(prevProps) {
  //   console.log('componentDidUpdate', prevProps.user.name !== this.props.user.name, prevProps.user, this.state.userEdit);
  //   if (prevProps.user.name !== this.props.user.name) {
  //     this.setState({userEdit: prevProps.user});
  //   }
  // }
  
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
      this.props.dispatch({type: 'SAVE_ITEM', data: this.state.userEdit})
      // this.props.dispatch({type: 'SET_ITEM', data: this.state.userEdit})
    }
  }
  
  render() {
    console.log('render', this.state.userEdit, this.props.userEdit);
    return (this.props.editMode ? 
      (<div>
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
      </div>): null
    )
  }
}

function mapStateToProps (state) {
  return {
    userEdit: state.users.selectedItem,
    editMode: state.users.editMode
  }
}

export default connect(mapStateToProps)(UserEdit);
