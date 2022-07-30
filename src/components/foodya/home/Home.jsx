import React from 'react'
import Banner_images from "../acc/Banner-images.png"
import working_hours from "../acc/clock.png"
import "./style.css"
function Home() {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#FBF4EE" }}>
                <div className="row justify-content-between align-items-center">
                    <div className="offset-md-1 col-md-4  set_margin_bottm">
                        <div className="home home_1st_wrappeer">
                            <h2>TODAYS'S  SPECIAL</h2>
                            <p className='fresh_menu lead'>FRESH FOOD MENU</p>
                            <p className='desc'>Blending the traditinal taste with globall  classics, foodya gives you
                                garunties to provide you best.</p>
                            <a href="#order_now_home">
                                <div className="order_now_btn">
                                    ORDER NOW
                                </div>
                            </a>
                            <p className='pt-2'>"Good Food is not a privilage....</p>
                            <p className='fw-bold right py-0'>IT'S YOUR RIGHT"</p>
                        </div>
                    </div>


                    <div className="col-md-7">
                        <div className="Banner_images">
                            <img src={Banner_images} alt="" />
                        </div>
                    </div>
                </div>


            </div>
            <div className="container my-5">
                <div className="row justify-content-around ">
                    <div className="col-md-3">
                        <a href="" className='text-decoration-none'>
                            <div className="card card-body p-md-2 shadow mt-md-0 mt-2 py-2">
                                <div className="working_hours">

                                    <div className="working_hours_img">
                                        <img src={working_hours} alt="working hours" />
                                    </div>
                                    <div className="time">
                                        <b>9:30 am - 8:30 pm</b>
                                        <p>Working Hours</p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>

                    <div className="col-md-3">
                        <a href="" className='text-decoration-none'>
                            <div className="card card-body p-md-2 shadow mt-md-0 mt-2 py-2">
                                <div className="working_hours">

                                    <div className="working_hours_img">
                                        <img src={working_hours} alt="working hours" />
                                    </div>

                                    <div className="time">
                                        <b>G 196 Noida</b>
                                        <p>Get Direction</p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <a href="" className='text-decoration-none'>
                            <div className="card card-body p-md-2 shadow mt-md-0 mt-2 py-2">
                                <div className="working_hours">

                                    <div className="working_hours_img">
                                        <img src={working_hours} alt="working hours" />
                                    </div>
                                    <div className="time">
                                        <b>9310307506</b>
                                        <p>Call order Now</p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home