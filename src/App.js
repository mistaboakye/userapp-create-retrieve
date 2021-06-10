import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import Users from './Components/Users';
import AddUser from './Components/AddUser';

export default class App extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        users: [
          {
            name: 'Mista Boakye',
            email: 'hello@mistaboakye.com',
            country: 'Ghana',
            password: '***************',
          },
          {
            name: 'Ange Boakye',
            email: 'hi@mistaboakye.com',
            country: 'Ghana',
            password: '***************',
          },
          {
            name: 'Georgina Boakye',
            email: 'hee@mistaboakye.com',
            country: 'Ghana',
            password: '***************',
          },
        ],
      };
    }
  }
  // method //
  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <h1>FORM</h1>
            <AddUser newUser={this.addNewUser} />
          </div>
          <div className='col-md-8'>
            <h1>USERS</h1>
            <Users usersdata={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}
