import React, { Component } from 'react';
import axios from "axios";
import './Profile.css';

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
        <button>edit</button>
        <br></br>
        <div className="profile-image-container">
          <img
            className="profile-image"
            src={this.state.profile.userImage}
            alt={this.state.profile.name}
          />
        </div>
        <div className="profile-info">
          <h1>Name: {this.state.profile.name}</h1>
          <p>Type: {this.state.profile.userType}</p>
          <p>Email: {this.state.profile.email}</p>
          <p>HomeCity: {this.state.profile.homeCity}</p>
        </div>
        <div className="profile-gig-requirements">
          <h1>Gig Requirements</h1>
          <p>Gig Appearance Fee:{this.state.profile.gigAppearanceFee}</p>
          <p>Gig Performance Fee:{this.state.profile.gigPerformanceFee}</p>
          <p>Gig Fee Total:{this.state.profile.gigFeeTotal}</p>
          <p>Gig Requirement Description: {this.state.profile.gigRequirementDescription}</p>
        </div>
      </>
    )
  }
}

export default Profile