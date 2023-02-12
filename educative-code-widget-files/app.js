import React from 'react';

export default class App extends React.Component {
  render() {
    var users = [
      { name: 'Robin' },
      { name: 'Markus' },
    ];

    var usersR = [<li>{'Robin'}</li>, <li>{'Markus'}</li>]

    return (
      <ul>
        {usersR}
      </ul>
    );
    // return (
    //   <ul>
    //     {users.map((user) => <li>{user.name}</li>
    //     )}
    //   </ul>
    // );
  }
}