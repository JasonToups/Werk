import React, { Form, Button } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import dollarEmpty from './dollar-empty.svg';
import heartEmpty from './heart-empty.svg';

// TODO Object Fit - I need to put the image in a fixed-width div. Then on the image itself, put the object-fit styling.

const Post = props => {
  const { _id, image, name, description } = props.post;
  return (
    <section className="post-container">
      <div className="post-image-container">
        <img className="post-image" src={image} alt={name} />
        <div className="post-header">
          <h3>
            {name}
          </h3>
          <div className="post-header-icons">
            <img src={dollarEmpty}></img>
            <img src={heartEmpty}></img>
          </div>
        </div>
      </div>
      <div className="post-body show">
        <p>{description}</p>
        <div className="button-container">
          <button className="post-buttons">tip</button>
          <button className="post-buttons">book</button>
        </div>
      </div>
      <div className="post-tip show">
        <h2>Tip your Queen</h2>
        <input type="text" placeholder='tips'></input>
        <button type='submit'>Submit</button>
      </div>
    </section >
  );
};

export default Post;

{/* <Form>
          <Form.Field>
            <label>Tip your Queen</label>
            <input placeholder='tips' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form> */}