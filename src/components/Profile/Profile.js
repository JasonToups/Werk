import React, { Component } from 'react';

class Profile extends Component {
  state = {
    profile: {},
    showEditForm: false,
    posts: [],
  };

  componentDidMount() {
    const userId = localStorage.getItem('uid');

    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({
          profile: res.data.data,
          posts: postSeed
        })
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  setProfileInfo = user => {
    this.setState({
      profile: user
    });
  }

  render() {
    return (
      <h1>Profile Page</h1>
    )
  }
}

export default Profile