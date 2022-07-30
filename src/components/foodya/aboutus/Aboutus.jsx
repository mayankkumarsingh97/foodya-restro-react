import React, { useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import "./style.css";

function Aboutus() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:8000/api/foodyaaboutus/')
            .then(response => response.json())
            .then((json) => {
                setProducts(json)
                setIsLoading(false)
            })
    }, []);
    console.log(products, "ye hai about us")

    return (
        <>
            <div className="container-fluid my-md-5" >
                <div className="row justify-content-center">

                </div>
                <div className="row">
                    {
                        isLoading ? <Loading title="Please wait..while data is being fetched" /> : <> {
                            products.map((item, key) => (
                                <>
                                    <div className="col-md-12" key={item.id}>
                                        <div className="row">
                                            <div className="col-md-6"  >
                                                <div className="aboutus_img">
                                                    {/* <img src={`http://localhost:8000${item.About_us_image}`} alt="about us image alt" /> */}
                                                    <img src={item.About_us_image} alt="about us image alt" />
                                                    {/* <p>{item.About_us_desc}</p> */}
                                                </div>
                                            </div>
                                            <div className="col-md-6"  >
                                                <div className="aboutus_desc">
                                                    <h1>About us</h1>
                                                    <p>{item.About_us_desc}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </>

                            ))
                        }</>


                    }
                </div>
            </div>
        </>
    )
}

export default Aboutus