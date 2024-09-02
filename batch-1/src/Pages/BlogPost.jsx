// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="blog-post">
      <h1 className="post-title">{post.title}</h1>
      <img src={post.image} alt={post.title} className="post-image" />
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
