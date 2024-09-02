// Home.js
import React, { useState } from 'react';
import FeaturedPosts from '../Components/FeaturedPosts';
import RecentPosts from '../Components/RecentPosts';
import Pagination from '../Components/Pagination'; // Import Pagination component
import './Home.css';

const Home = ({ featuredPosts, recentPosts }) => {
  const [currentFeaturedPage, setCurrentFeaturedPage] = useState(1);
  const [currentRecentPage, setCurrentRecentPage] = useState(1);
  const postsPerPage = 4; // Number of posts per page

  // Get current featured posts based on page
  const indexOfLastFeaturedPost = currentFeaturedPage * postsPerPage;
  const indexOfFirstFeaturedPost = indexOfLastFeaturedPost - postsPerPage;
  const currentFeaturedPosts = featuredPosts.slice(indexOfFirstFeaturedPost, indexOfLastFeaturedPost);

  // Get current recent posts based on page
  const indexOfLastRecentPost = currentRecentPage * postsPerPage;
  const indexOfFirstRecentPost = indexOfLastRecentPost - postsPerPage;
  const currentRecentPosts = recentPosts.slice(indexOfFirstRecentPost, indexOfLastRecentPost);

  // Change page
  const paginateFeatured = (pageNumber) => setCurrentFeaturedPage(pageNumber);
  const paginateRecent = (pageNumber) => setCurrentRecentPage(pageNumber);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Blog</h1>
        <p>Sharing thoughts, ideas, and stories.</p>
      </header>

      <FeaturedPosts posts={currentFeaturedPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={featuredPosts.length}
        paginate={paginateFeatured}
        currentPage={currentFeaturedPage}
      />

      <RecentPosts posts={currentRecentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={recentPosts.length}
        paginate={paginateRecent}
        currentPage={currentRecentPage}
      />
    </div>
  );
};

export default Home;
