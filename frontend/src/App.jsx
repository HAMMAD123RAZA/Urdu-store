import Banner from "./components/Banner";
import FreeBook from "./components/FreeBook";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home";
import Course from "./components/Course";
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <>
<Router>
  <Navbar/>
  <Routes>
    
<Route path="/" element={  <Home/>} />
<Route path="/course" element={  <Course/>} />
<Route path="/signup" element={  <SignUp/>} />


  </Routes>
</Router>

    </>
  )
}