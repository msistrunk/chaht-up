import React, { Component } from 'react';
// tslint:disable
/* eslint-disable */

export default class App extends Component {
  state: any = {
    users: [],
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <h1>
          Users
        </h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
