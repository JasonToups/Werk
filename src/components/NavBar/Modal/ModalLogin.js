import React, { Component } from 'react'
import { Button, Modal, Form, } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Modal.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    show: false,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.close()
        this.props.setCurrentUser(res.data.data)
        this.props.history.push('/profile');

      })
      .catch(err => {
        console.log(err);
      })
  };

  open = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        <Button onClick={this.open}> Log In!</Button>
        <Modal open={this.state.show} onClose={this.close}>
          <Modal.Header>Log In!</Modal.Header>
          <Modal.Content Form>
            <div className='container mt-4'>
              <div className='row'>
                <div className='col-md-4 offset-md-4'>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <label htmlFor='name'>Email</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='email'
                        id='email'
                        name='email'
                        value={this.state.email}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label htmlFor='name'>Password</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='password'
                        id='password'
                        name='password'
                        value={this.state.password}
                      />
                    </Form.Field>
                  </Form>
                </div>
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <button className='btn btn-primary float-right' onClick={this.handleSubmit}>
              Login
              </button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}




export default withRouter(Login);