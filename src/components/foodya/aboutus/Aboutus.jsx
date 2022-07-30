import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import about_us_pic from "../acc/momos.png"
import "./style.css";

function Aboutus() {
    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch('http://localhost:8000/api/foodyaaboutus/')
    //         .then(response => response.json())
    //         .then((json) => {
    //             setProducts(json)
    //             setIsLoading(false)
    //         })
    // }, []);
    

    return (
        <>
            <div className="container-fluid my-md-5" >
                <div className="row justify-content-center">

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6"  >
                                <div className="aboutus_img">
                                    <img src={about_us_pic} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6"  >
                                <div className="aboutus_desc">
                                    <h1>About us</h1>
                                    <p>FoodYa brings you the authentic taste of North India, South India, Italian food, and much more! We are known for making food that makes both heart and stomach happy. Our freshly cooked food is irresistible. Thanks to our secret recipes and ingredients.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus