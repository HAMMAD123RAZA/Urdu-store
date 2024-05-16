import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Course = () => {
    const [book, setBook] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Initially assume user is logged in
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve token from local storage

        if (!token) {
            setIsLoggedIn(false); // If token doesn't exist, user is not logged in
        } else {
            // Token exists, make request to get books
            const getBook = async () => {
                try {
                    const response = await axios.get("http://localhost:4040/book", {
                        headers: {
                            Authorization: `Bearer ${token}` // Pass token in the Authorization header
                        }
                    });
                    console.log(response.data);
                    setBook(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            getBook();
        }
    }, []);

    useEffect(() => {
        if (!isLoggedIn) {
            // Redirect user to login page if not logged in
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            {/* Your course component content */}
        </>
    );
};

export default Course;
