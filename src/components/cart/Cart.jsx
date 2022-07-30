import React, { useState } from 'react'
import Notification from "../notification/Notification"
import "./cart.css"
import mygirl from "../b2brain-dashborad/img/mygirl.png"
import iphone from "./iphone.png"
export default function Cart() {
    const [counter,updateCounter]=useState(0);
    const InCounter=()=>{
        updateCounter(counter+1)
    }
    if(counter>=50){
        console.log("maximum order value must be 5 only.")
       updateCounter(50)
    }
  return (
    <div className="container-fluit mt-md-2 mt-1 fix_it">
        <div className="row justify-content-end">
            <div className="col-md-4 col-sm-10 shadow-lg">
                <div className="cart">
                    <div className="cart_img_cont">
                    <img src={iphone} alt="cart img" className='cart_img'/>
                    </div>
                    <div className="desc">
                     <h3>I Phone 12</h3>
                     <h6>128 Gibs</h6>
                     <p>comes with retina display with 
                        12Gibs of RAM.
                        comes with retina display with 
                        12Gibs of RAM.
                     </p>
                     <p>Latest 2022 model</p>
                    </div>

                    <div className="addButton">
                        <div onClick={InCounter} className="btn btn-custom">
                            Checkout
                        </div>
                        <div className="counter">
                              {counter}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>

  )
}
