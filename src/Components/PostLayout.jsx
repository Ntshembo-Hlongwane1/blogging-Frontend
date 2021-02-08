import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../Styles/PostsLayout.css';

export const PostLayout = ({ author, post, author_profileImage }) => {
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);

  const ToggleEditMenu = () => {
    setIsEditMenuOpen(!isEditMenuOpen);
  };
  return (
    <div className="blog-post">
      <div className="blog-post-top">
        <div className="blog-post-top-userinfo">
          <Avatar src={author_profileImage} alt="Blog Post Owner image" />
          <h4 className="blog-post-owner">{author}</h4>
        </div>
        <MoreVertIcon className="blog-post-edit-icon" onClick={ToggleEditMenu} />
        {isEditMenuOpen ? (
          <div className="edit-menu">
            <h4 className="edit-menu-option">Edit Blog</h4>
            <h4 className="edit-menu-option">Delete Blog</h4>
            <h4 className="edit-menu-option">Like Blog</h4>
            <h4 className="edit-menu-option">Dislike Blog</h4>
          </div>
        ) : null}
      </div>
      <div className="blog-post-bottom">
        <h3>{post}</h3>
      </div>
    </div>
  );
};

PostLayout.propTypes = {
  author: PropTypes.string,
  post: PropTypes.string,
  author_profileImage: PropTypes.string,
};
