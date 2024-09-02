import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import LoginForm from "./Pages/Login";
import BlogPost from "./Pages/BlogPost";
import AddBlog from "./Pages/AddBlog";
import { featuredPosts } from "./Data/featuredPosts";
import { recentPosts } from "./Data/recentPosts";

function App() {
  const allPosts = [...featuredPosts, ...recentPosts];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home featuredPosts={featuredPosts} recentPosts={recentPosts} />
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<BlogPost posts={allPosts} />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
