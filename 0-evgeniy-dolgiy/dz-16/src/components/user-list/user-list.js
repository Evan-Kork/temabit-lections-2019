import React, { Component } from 'react';

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userList: [
        {
          name: 'Evgeniy',
          surname: 'Dolgiy'
        },
        {
          name: 'Evgeniy',
          surname: 'Dolgiy'
        },
        {
          name: 'Evgeniy',
          surname: 'Dolgiy'
        },
        {
          name: 'Evgeniy',
          surname: 'Dolgiy'
        }
      ]
    };
  }
  
  componentDidMount () {
    console.log('componentDidMount');
    let userList = this.state.userList;
    userList.push({name: 'Evgeniy', surname: 'Dolgiy'});
    this.setState({userList: userList}, () => {
      // console.log('userList claback', this.state.userList);
    });
    // console.log('userList', this.state.userList);
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
            {this.state.userList.map((item, index) => {
              return (
                <tr key={index}>
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

export default UserList;




//   constructor(props) {
//     super(props);
//     this.state = {
//       userList: [
//         {
//           name: 'Evgeniy',
//           surname: 'Dolgiy'
//         },
//         {
//           name: 'Evgeniy',
//           surname: 'Dolgiy'
//         },
//         {
//           name: 'Evgeniy',
//           surname: 'Dolgiy'
//         },
//         {
//           name: 'Evgeniy',
//           surname: 'Dolgiy'
//         }
//       ]
//     }
//   }
//   render() {
//     return (
//       <table className="user-list">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Surname</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.state.userList.map((item, index) => {
//             return(<tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.surname}</td>
//             </tr>);
//           })}
          
//         </tbody>
//       </table>
//     );
//   }
// }

// export default UserList;
