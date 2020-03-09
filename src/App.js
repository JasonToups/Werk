import React, { Component } from "react";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css';
import { Header, Container } from 'semantic-ui-react';

import NavBar from './components/NavBar/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header inverted as='h1' className="App-header">
        Hello Dolly
      </Header>
      <Container>
        Here's the place for the Homepage
      </Container>

    </div>
  );
}

export default App;
