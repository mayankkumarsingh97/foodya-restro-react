import React from 'react'
import logo from "../acc/foodya-logo.png"
import navbar_bag from "../acc/bag.png"
import "./navbar.css"
import { Link, Outlet } from "react-router-dom"
function Navbar() {
  return (
    <>
    <div className="container py-2 d-none d-md-block" style={{backgroundColor:"#FBF4EE"}}>
        <div className="row align-items-center">
            <div className="col-3">
                <div className="logo">
                  <a href="#logo">
                  <img src={logo} alt="fodya logo" className='img-fluid'/>
                  </a>
                </div>
              
            </div>
            <div className="offset-md-2 col-7">
                    <nav >
                        <ul>
                            {/* <li><a href="#" id='menu_circle'>Menu</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Our Chefs</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#"><img src={navbar_bag} alt="" /></a></li> */}
                            
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/menu" id="menu_circle">Menu</Link></li>
                            <li><Link to="/aboutus" >About us</Link></li>
                            <li><Link to="/delivery" >Delivery</Link></li>
                            <li><Link to="/ourchefs" >Our Chefs</Link></li>
                            {/* <li><Link to="/revies" >Reviews</Link></li> */}
                            <li><Link to="contactus" >Contact us</Link></li>


                        </ul>

                    </nav>
                </div>
        </div>
    </div>
    </>
  )
}

export default Navbar