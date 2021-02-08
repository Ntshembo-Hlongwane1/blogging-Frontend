import React, { useState } from 'react';
import '../Styles/WriteBlog.css';
import axios from 'axios';

export const WriteBlog = () => {
  const token = localStorage.getItem('token');
  const [post, setPost] = useState('');

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const AddPost = (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append('post', post);

    const baseURL = {
      dev: 'http://localhost:5000/api/post',
      prod: 'https://bloggin-demo.herokuapp.com/api/post',
    };
    const url = process.env.NODE_ENV === 'production' ? baseURL.prod : baseURL.dev;
    axios
      .post(url, form_data, {
        headers: {
          'x-auth-token': token,
        },
      })
      .then((response) => {
        alert(response.data.msg);
        setPost('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="new-blog">
      <h2 className="new-blog-header">What's on your mind</h2>
      <input value={post} onChange={handleChange} type="text" placeholder="Write new blog" className="new-blog-inputField" />
      <button onClick={AddPost} className="btn btn-new-blog">
        Add New Blog
      </button>
    </div>
  );
};
