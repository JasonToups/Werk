import React, { Component } from 'react';
import axios from "axios";

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
          // posts: postSeed
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
    console.log("render profile")
    console.log(this.state.profile)
    return (
      <>
        <h1>Profile Page</h1>
        <img src={this.state.profile.userImage}></img>
        <p>Name: {this.state.profile.name}</p>
        <p>Type: {this.state.profile.userType}</p>
        <p>Email: {this.state.profile.email}</p>
        <p>HomeCity: {this.state.profile.homeCity}</p>
        <h1>Gig Requirements</h1>
        <p>Gig Appearance Fee:{this.state.profile.gigAppearanceFee}</p>
        <p>Gig Performance Fee:{this.state.profile.gigPerformanceFee}</p>
        <p>Gig Fee Total:{this.state.profile.gigFeeTotal}</p>
        <p>Gig Requirement Description: {this.state.profile.gigRequirementDescription}</p>
      </>
    )
  }
}

export default Profile