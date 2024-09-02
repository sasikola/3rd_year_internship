import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPosts.css';

const FeaturedPosts = ({ posts }) => {
  return (
    <section className="featured-posts">
      <h2>Featured Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <Link to={`/post/${post.id}`}>
              <img src={post.image} alt={post.title} className="post-image" />
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
