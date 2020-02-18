import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    console.log('componentDidMount', this.props.dispath);
    // let userList = this.state.userList;
    // userList.push({name: 'Evgeniy', surname: 'Dolgiy'});
    // this.setState({userList: userList}, () => {
    //   // console.log('userList claback', this.state.userList);
    // });
    // console.log('userList', this.state.userList);
  }
  
  // selectUser (item) {
  //   console.log(item);
  // }
  
  selectUser(index) {
    return () => {
      console.log(this.props, this.props);
      this.props.dispatch({type: 'SET_ITEM', data: index})
    }
  }
  
  render () {
    console.log('render');
    return (
      <React.Fragment>
        <h1>Table list</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userList.map((item, index) => {
              return (
                <tr
                  key={index}
                  onClick={this.selectUser(index)}
                >
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// export default UserList;


function mapStateToProps (state) {
  console.log('mapStateToProps', state);
  return {
    userList: state.users.list
  }
}

export default connect(mapStateToProps)(UserList);
