import React, { Component } from 'react'
import { Button, Modal, Form, } from 'semantic-ui-react';
import axios from 'axios'

class ProfileModal extends Component {
  state = {
    userImage: "",
    name: "",
    userType: "",
    email: "",
    password: "",
    password2: "",
    homeCity: "",
    gigAppearanceFee: "",
    gigPerformanceFee: "",
    gigRequirementDescription: "",
    show: false,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; // makes the form fillable

  handleRadioChange = (e, { value }) => this.setState({ userType: value })

  handleSubmit = event => {
    const userId = localStorage.getItem('uid');

    event.preventDefault()
    console.log(this.state)
    axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}`, this.state)
      .then(res => {
        console.log(res);
        this.close()
        // what's this?
        this.props.history.push('/profile');
      }).catch(err => {
        console.log(err.response);
      }); // on submit
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
        <button className="profile-edit" onClick={this.open}> Edit your profile!</button>
        <Modal open={this.state.show} onClose={this.close}>
          <Modal.Header>Edit your profile!</Modal.Header>
          <Modal.Content Form>
            <div className='container mt-4'>
              <div className='row'>
                <div className='col-md-4 offset-md-4'>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group inline required>
                      <label>User Type</label>
                      <Form.Radio
                        label='Queen'
                        value='Queen'
                        checked={this.state.userType === 'Queen'}
                        onChange={this.handleRadioChange}
                      />
                      <Form.Radio
                        label='Fan'
                        value='Fan'
                        checked={this.state.userType === 'Fan'}
                        onChange={this.handleRadioChange}
                      />
                    </Form.Group>

                    <Form.Field>
                      <label htmlFor='name'>Name</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='text'
                        id='name'
                        name='name'
                        value={this.state.name}
                      />
                    </Form.Field>
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
                    <Form.Field>
                      <label htmlFor='password2'>Confirm Password</label>
                      <input
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='password'
                        id='password2'
                        name='password2'
                        value={this.state.password2}
                      />
                    </Form.Field>
                  </Form>
                </div>
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <button className='btn btn-primary float-right' onClick={this.handleSubmit}>
              Register
              </button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}




export default ProfileModal;