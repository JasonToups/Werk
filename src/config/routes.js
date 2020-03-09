import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/NavBar/Modal/ModalLogin";
import PostContainer from "../components/PostContainer/PostContainer";
import ProfileContainer from "../components/ProfileContainer/ProfileContainer";
import CitiesView from "../components/CitiesView/CitiesView";
import PostDetail from "../components/PostDetail/PostDetail";

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path="/" component={currentUser ? CitiesView : Home} />
    <Route exact path="/cities" component={CitiesView} />
    <Route
      path="/login"
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route exact path="/postcontainer" component={PostContainer} />
    <Route path="/profile" component={ProfileContainer} />
    <Route path="/posts/:id" component={PostDetail} />
  </Switch>
);
