import Banner from "./components/Banner";
import FreeBook from "./components/FreeBook";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home";
import Course from "./components/Course";
import {BrowserRouter as Router ,Route,Routes, Navigate} from "react-router-dom"

import SignUp from "./components/SignUp.jsx";
import { useAuth } from "./Context/AuthProvider.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Update from "./components/Update.jsx";
import CartSlice from "../RTK/CartSlice.js";
import Cart from "../RTK/Cart.jsx";

export default function App() {
   const [authUser,setAuthUser]=useAuth()
  return (
    <>
<Router>
  <Navbar/>
  <Routes>
<Route path="/" element={  <Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/course" element={ authUser? <Course  />:<Navigate to="/signup" />} />
<Route path="/signup" element={  <SignUp/>} />
<Route path="/login" element={  <Login/>} />
<Route path="/admin" element={ authUser? <Admin/>:<Navigate to="/signup" />} />
<Route path="/update/:id" element={<Update/>} />
<Route path="/cart" element={<Cart/>} />
<Route path="*" element={<h1 className="text-5xl font-bold text-center " >404 Not Found</h1>} />
  </Routes>
</Router>
    </>
  )
}