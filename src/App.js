import React, { Component } from "react";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css';
import { Header, Container } from 'semantic-ui-react';

import NavBar from './components/NavBar/NavBar'
import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem("uid")
  };

  setCurrentUser = userId => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  }

  logout = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
        localStorage.removeItem('uid');
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="App" >
          <NavBar
            currentUser={this.state.currentUser}
            setCurrentUser={this.setCurrentUser}
            logout={this.logout}></NavBar>
          <Header inverted as='h1' className="App-header">
            Hey Queen
          </Header>
          <Container>
            Here's the place for the Homepage
          </Container>
        </div>
      </>
    )
  };
}

export default App;
