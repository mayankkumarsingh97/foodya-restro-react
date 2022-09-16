import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./components/foodya/menu/Menu"
import Home from "./components/foodya/home/Home"
import Aboutus from "./components/foodya/aboutus/Aboutus"
import OurChefs from "./components/foodya/slider/OurChefs"
import Contactus from "./components/foodya/contactus/Contactus" 
// import {  Outlet } from "react-router-dom"
import BackToUp from './components/foodya/goTotop/BackToUp';


export default function App() {
  return (
    <>
      <Home />
      <Menu />
      <Aboutus />
      <BackToUp/>
      <OurChefs />
      <Contactus/>
    </>
  )
}





