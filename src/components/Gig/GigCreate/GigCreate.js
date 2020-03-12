import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button, Modal, Form, Input, Icon } from "semantic-ui-react";

class GigCreate extends Component {
  state = {
    queen_submitted_to: "",
    user_submitted_from: "",
    name: "",
    address: "",
    date_of_gig: "",
    cost: 0,
    visibility: true,
    approval: true,
    show: false,
  }


  componentDidMount() {
    const userId = localStorage.getItem('uid');

    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({
          user_submitted_from: userId,
          name: res.data.data.name,
        })
        console.log(this.state.user_submitted_from)
        console.log(this.state.name)
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/posts`, this.state, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.close()
        this.props.setCurrentUser(res.data.data)
        this.props.history.push('/');

      })
      .catch(err => {
        console.log(err.response);
      })
  };
  // TODO the open and close methods could be redundant. Use toggleShow() if possible
  open = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({ show: false })
  }

  toggleShow = () => {
    this.setState({
      show: this.state.show ? this.state.show = false : this.state.show = true
    })
  }


  render() {
    return (
      <>
        <Button
          icon
          color='red'
          onClick={this.toggleShow}>Book</Button>
        <Modal
          open={this.state.show}
          onClose={this.toggleShow}>
          <h1>Gig</h1>
        </Modal>
      </>
    );
  }
};

export default GigCreate;