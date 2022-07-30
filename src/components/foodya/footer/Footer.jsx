import "./style.css"
import location from "../acc/loacation.png"
import logo from "../acc/foodya.png"
import zomato_logo from "../acc/zomzto.png"
import swgg_logo from "../acc/swgg.png"
const Footer = () => {
    return (
        <>
            <div className="container-fluid  text-white py-2" style={{backgroundColor:"#000"}}>
                <div className="row align-items-center">

                    <div className="col-md-3">
                        <div className="footer_logo d-flex justify-content-center">
                            <img src={logo} alt="footer logo" />
                        </div>
                    </div>

                    
                    <div className="col-md-2 my-md-0 my-2">
                        <div className="get_direction">
                            <div className="location_img">
                                <img src={location} alt="location img.." />
                            </div>
                            <div className="direction_desc">
                                <p>G-196 Noida</p>
                                <p>Get Direction</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 my-md-0 my-2">
                        <div className="get_direction">
                            <div className="location_img">
                                <img src={location} alt="location img.." />
                            </div>
                            <div className="direction_desc">
                                <p>G-196 Noida</p>
                                <p>Get Direction</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 my-md-0 my-2">
                        <div className="get_direction">
                            <div className="location_img">
                                <img src={location} alt="location img.." />
                            </div>
                            <div className="direction_desc">
                                <p>G-196 Noida</p>
                                <p>Get Direction</p>
                            </div>
                        </div>
                    </div>





                     <div className="col-md-3 p-0">
                     <div className="zomato_logo d-flex align-items-center ">
                                    <img src={zomato_logo} className='mx-1' alt="" />
                                    <img src={swgg_logo} alt="" />
                                </div>
                     </div>

                </div>
            </div>
        </>
    )
}

export default Footer