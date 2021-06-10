import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      country: '',
      password: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newUser(this.state);
    this.setState({
      name: '',
      email: '',
      country: '',
      password: '',
    });
    console.log('form Submitted', this.state);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            onChange={this.handleChange}
            value={this.state.email}
          />
        </Form.Group>
        <Form.Group controlId='formBasicCountry'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            name='country'
            onChange={this.handleChange}
            value={this.state.country}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
          />
        </Form.Group>
        <Button variant='secondary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}
