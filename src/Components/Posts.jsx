import { useEffect, useState } from 'react';
import axios from 'axios';
import { PostLayout } from './PostLayout';

export const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const baseURL = {
      dev: 'http://localhost:5000/api/posts',
      prod: 'https://bloggin-demo.herokuapp.com/api/posts',
    };
    const url = process.env.NODE_ENV === 'production' ? baseURL.prod : baseURL.dev;

    axios
      .get(url)
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (posts === null) {
    return <h1>Fetching Blogs....</h1>;
  } else {
    return (
      <div className="blogs-container">
        {posts.map((post) => {
          return (
            <div key={post._id}>
              <PostLayout
                post_id={post._id}
                post={post.post}
                author={post.user.email}
                author_profileImage={post.user.profile_pic}
              />
            </div>
          );
        })}
      </div>
    );
  }
};
