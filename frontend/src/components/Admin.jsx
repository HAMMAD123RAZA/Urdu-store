import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    price: '',
    category: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('title', formData.title);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:8080/book', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Book created:', response.data);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div>
      <h2 className='text-center'>Admin, here you can perform CRUD</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange}  required />
          </label>
        </div>
        <div>
          <label>
            Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input type="text" name="category" value={formData.category} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input type="file" name="image" onChange={handleFileChange} required />
          </label>
        </div>
        <button type="submit">Create Book</button>
      </form>
    </div>
  );
};

export default Admin;