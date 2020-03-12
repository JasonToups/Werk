import React from "react";
import Post from "./Post/Post";
import axios from "axios";
class PostFeed extends React.Component {
  state = {
    posts: [],
  };

  getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`, { withCredentials: true })
      .then(res => {
        // console.log(`axios response`, res);
        this.setState({
          posts: res.data.data
        });
        // console.log(`state.posts:`, this.state.posts);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidUpdate() {
    // console.log(this.props.selectedCity)
  }

  componentDidMount() {
    console.log("PostFeed Mounted");
    this.getPosts();
  }



  displayPosts = posts => {
    return posts.map(post => {
      return <Post key={Math.random() * 10000} post={post} />;
    });
  };

  render() {
    return (
      <section className="post-feed">
        {this.state.posts.length ? (
          this.displayPosts(this.state.posts)
        ) : (
            <h1>No Posts Yet!</h1>
          )}
      </section>
    );
  }
}

export default PostFeed