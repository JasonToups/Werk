import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

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
        </div>
      </div>

      <div className="post-body">

        <p className="post-snippet">{description}</p>
      </div>
    </section>
  );
};

export default Post;