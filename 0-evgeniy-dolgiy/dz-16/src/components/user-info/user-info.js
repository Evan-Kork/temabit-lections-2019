import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  
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
