// AddBlog.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBlog.css';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!excerpt) newErrors.excerpt = 'Excerpt is required';
    if (!image) newErrors.image = 'Image is required';
    if (!content) newErrors.content = 'Content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newPost = {
      id: Date.now(), // Use timestamp as a unique ID
      title,
      excerpt,
      image, // Base64 image string
      content,
    };

    // Get existing posts from localStorage or initialize an empty array
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    
    // Add the new post to the array
    existingPosts.push(newPost);
    
    // Save the updated array back to localStorage
    localStorage.setItem('posts', JSON.stringify(existingPosts));
    
    // Clear form fields
    setTitle('');
    setExcerpt('');
    setImage('');
    setContent('');
    setImageFile(null);
    setErrors({});
    
    // Navigate to home or another page
    navigate('/');
  };

  return (
    <div className="add-blog">
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
             
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </label>
        <label>
          Excerpt:
          <input 
            type="text" 
            value={excerpt} 
            onChange={(e) => setExcerpt(e.target.value)} 
             
          />
          {errors.excerpt && <p className="error-message">{errors.excerpt}</p>}
        </label>
        <label>
          Image:
          <input 
            type="file" 
            accept="image/*"
            onChange={handleImageChange} 
             
          />
          {errors.image && <p className="error-message">{errors.image}</p>}
        </label>
        {image && <img src={image} alt="Preview" className="image-preview" />}
        <label>
          Content:
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
             
          />
          {errors.content && <p className="error-message">{errors.content}</p>}
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddBlog;
