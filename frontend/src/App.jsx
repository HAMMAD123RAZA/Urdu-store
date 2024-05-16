import Banner from "./components/Banner";
import FreeBook from "./components/FreeBook";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home";
import Course from "./components/Course";
import {BrowserRouter as Router ,Route,Routes, Navigate} from "react-router-dom"
import SignUp from "./components/SignUp";
import { useAuth } from "./Context/AuthProvider";

export default function App() {
   const [authUser,setAuthUser]=useAuth()
  return (
    <>
<Router>
  <Navbar/>
  <Routes>
    
<Route path="/" element={  <Home/>} />
<Route path="/course" element={ authUser? <Course  />:<Navigate to="/signup" />} />
<Route path="/signup" element={  <SignUp/>} />


  </Routes>
</Router>

    </>
  )
}