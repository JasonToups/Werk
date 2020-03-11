import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/NavBar/Modal/ModalLogin";
import PostFeed from "../components/PostFeed/PostFeed";
import Profile from "../components/Profile/Profile";

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/login"
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route exact path="/postfeed" component={PostFeed} />
    <Route path="/profile" component={Profile} />
  </Switch>
);
