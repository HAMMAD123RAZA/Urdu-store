import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const SignUp = () => {
  // State variables to hold form data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4040/user/login', {
        fullName,
        email,
        password
      });
      console.log(response.data); // Log the response from the server
      // Reset form fields after successful submission
      setFullName('');
      setEmail('');
      setPassword('');
      alert('User created successfully!');
    } catch (error) {
      console.error('Error:', error.response.data); // Log any errors
      alert('Error creating user. Please try again.');
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-md w-80 p-10 border-[2px]">
          <div className="py-3">
            <h1 className="text-4xl font-serif">SignUp</h1>
            <form onSubmit={handleSubmit}>
              <div className="py-3">
                <p className="font-bold">Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} 
                  required
                />
              </div>
              <div className="py-3">
                <p className="font-bold">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
              </div>
              <div className="py-3">
                <p className="font-bold">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit" 
                className="btn my-2 px-3 bg-pink-500 text-white rounded-md hover:text-pink-600 hover:bg-white"
              >
                SignUp
              </button>
            </form>
            <p className="mt-2">
              Have an Account?{' '}
              <span className="text-blue-700 underline cursor-pointer">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
