import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    if (this.props.match.params.userID) {
    console.log('props', this.props.match.params.userID);
      this.props.dispatch({type: 'SET_ITEM_BY_ID', data: this.props.match.params.userID})
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userID !== prevProps.match.params.userID) {
      this.props.dispatch({type: 'SET_ITEM_BY_ID', data: this.props.match.params.userID})
    }
  }
  
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps', props.match.params.userID);
  //   return {};
  // }
  
  setEditUserMode() {
    return () => {
      this.props.dispatch({type: 'EDIT_ITEM_CHANGE', data: {}})
      // if (this.props.setEditUserMode) {
      //   this.props.setEditUserMode();
      // }
    }
  }
  render() {
    console.log('this.props.userInfo', this.props.userInfo);
    return (
      this.props.userInfo !== null ? (
        <div>
          <h1>User Info</h1>
          <Link to={`/`}>Back</Link>
          <Link to={`/user-edit/${this.props.userInfo.id}`}>Go to edit</Link>
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
        </div>): null
    )
  }
}
function mapStateToProps (state) {
  return {
    userInfo: state.users.selectedItem
  }
}

export default connect(mapStateToProps)(UserInfo);
