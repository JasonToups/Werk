import React, { Form, Button, Component } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import dollarEmpty from './dollar-empty.svg';
import heartEmpty from './heart-empty.svg';
import heartFilled from './heart-filled.svg';

// TODO Object Fit - I need to put the image in a fixed-width div. Then on the image itself, put the object-fit styling.

class Post extends Component {
  state = {
    show: false,
    favorite: false
  }
  // TODO look at facer for toggle method
  toggleShow = () => {
    this.setState({
      show: this.state.show ? this.state.show = false : this.state.show = true
    })
  }

  toggleFavorite = () => {
    this.setState({
      favorite: this.state.favorite ? this.state.favorite = false : this.state.favorite = true
    })
  }

  render() {
    const { _id, image, name, description } = this.props.post;
    return (
      <section className="post-container">
        <div className="post-image-container">
          <img
            className="post-image"
            src={image}
            alt={name}
            onClick={this.toggleShow}
          />
          <div className="post-header">
            <h3
              onClick={this.toggleShow}>
              {name}
            </h3>
            <div className="post-header-icons">
              <img
                src={dollarEmpty}
                onClick={this.toggleShow}></img>
              <img
                className="favorite"
                src={`${this.state.favorite ? heartFilled : heartEmpty}`}
                onClick={this.toggleFavorite}></img>
            </div>
          </div>
        </div>
        <div className={`post-body ${this.state.show ? 'show' : ''}`}>
          <p>{description}</p>
          <div className="button-container">
            <input type="text" placeholder='tip your queen'></input>
            <button
              className="post-button-tip"
              type='submit'>tip</button>
            {/* <button className="post-buttons">tip</button> */}
            <button className="post-button-book">book</button>
          </div>
        </div>
      </section >
    );
  }
};

export default Post;

{/* <Form>
          <Form.Field>
            <label>Tip your Queen</label>
            <input placeholder='tips' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form> */}