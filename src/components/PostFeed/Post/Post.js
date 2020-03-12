import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";
import "./Post.css";
import dollarEmpty from './dollar-empty.svg';
import dollarFilled from './dollar-filled.svg';
import heartEmpty from './heart-empty.svg';
import heartFilled from './heart-filled.svg';
import GigCreate from '../../Gig/GigCreate/GigCreate';

class Post extends Component {
  state = {
    show: false,
    favorite: false
  }
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
                src={`${this.state.show ? dollarFilled : dollarEmpty}`}
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
            <Input
              type="number"
              placeholder='tip your queen' />
            <Button
              className="post-button-tip"
              type='submit'
              color='red'>tip</Button>
            <GigCreate />
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