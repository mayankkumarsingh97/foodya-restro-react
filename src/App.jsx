import Index from "./components/b2brain-dashborad/B2brain"
import Cart from "./components/cart/Cart"
import Shop from "./components/shop/Shop"
import Navbar from "./components/foodya/navbar/Navbar"
import Menu from "./components/foodya/menu/Menu"
import Home from "./components/foodya/home/Home"
import Aboutus from "./components/foodya/aboutus/Aboutus"
import OurChefs from "./components/foodya/slider/OurChefs"
import Contactus from "./components/foodya/contactus/Contactus" 
import Footer from "./components/foodya/footer/Footer"
import {  Outlet } from "react-router-dom"
import Loading from "./components/foodya/loading/Loading"
export default function App() {
  return (
    <>
      <Home />
      <Menu />
      <Aboutus />
      <OurChefs />
      <Contactus/>
    

    </>
  )
}





