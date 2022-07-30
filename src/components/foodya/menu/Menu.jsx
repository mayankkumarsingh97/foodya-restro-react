import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading';
import static_menu_img from "../img/menus/picinsert5.png"
import "./style.css"
function Menu() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8000/api/foodyamenu/')
            .then(response => response.json())
            .then((json) => {
                setProducts(json)
                setLoading(false)
            })

    }, []);
    console.log(products)
    const changeHandler = () => {
        alert("hello")
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center my-md-4">
                    <div className="col-auto">
                        <h1 className='fw-bold menu_h1'>EXPLORE OUR MENU </h1>
                    </div>
                </div>
                {/* content with static data  */}
                {/* content with static data  */}
                <div className="row">
                    <div className="col-md-3 col-md-3 col-6 position-relative my-md-3 my-3">

                        <div className="main">

                            <div className="menu_img">

                                <h3>Cheese Dosa</h3>
                                <h3>Rs.310/-</h3>

                                <div className="d-flex w-100 justify-content-between">
                                    <div className="order_now_btn">
                                        ORDER NOW
                                    </div>

                                </div>

                            </div>
                        </div>
                        <a href="#">
                            <div className="story">


                                <img src={static_menu_img} alt="cusine pic" />
                            </div>
                        </a>

                    </div>
                    <div className="col-md-3 col-md-3 col-6 position-relative my-md-3 my-3">

                        <div className="main">

                            <div className="menu_img">

                                <h3>Cheese Dosa</h3>
                                <h3>Rs.310/-</h3>

                                <div className="d-flex w-100 justify-content-between">
                                    <div className="order_now_btn">
                                        ORDER NOW
                                    </div>

                                </div>

                            </div>
                        </div>
                        <a href="#">
                            <div className="story">


                                <img src={static_menu_img} alt="cusine pic" />
                            </div>
                        </a>

                    </div>

                    <div className="col-md-3 col-md-3 col-6 position-relative my-md-3 my-3">

                        <div className="main">

                            <div className="menu_img">

                                <h3>Cheese Dosa</h3>
                                <h3>Rs.310/-</h3>

                                <div className="d-flex w-100 justify-content-between">
                                    <div className="order_now_btn">
                                        ORDER NOW
                                    </div>

                                </div>

                            </div>
                        </div>
                        <a href="#">
                            <div className="story">


                                <img src={static_menu_img} alt="cusine pic" />
                            </div>
                        </a>

                    </div>

                    <div className="col-md-3 col-md-3 col-6 position-relative my-md-3 my-3">

                        <div className="main">

                            <div className="menu_img">

                                <h3>Cheese Dosa</h3>
                                <h3>Rs.310/-</h3>

                                <div className="d-flex w-100 justify-content-between">
                                    <div className="order_now_btn">
                                        ORDER NOW
                                    </div>

                                </div>

                            </div>
                        </div>
                        <a href="#">
                            <div className="story">


                                <img src={static_menu_img} alt="cusine pic" />
                            </div>
                        </a>

                    </div>
                </div>

                {/* Below menu contains data from API */}
                {/* Below menu contains data from API */}


                <div className="row  align-items-center justify-content-center">

                    {
                        loading ? <Loading title="Please wait...while our entire menu list is being fetched.." /> : <>
                            {
                                products.map((item, key) => (

                                    <div className="col-md-3 col-md-3 col-6 position-relative my-md-3 my-3" key={item.id}>

                                        <div className="main">

                                            <div className="menu_img">
                                                {/* <p>{item.Category.foodya_cat_title}</p> */}
                                                <h3>{item.title}</h3>
                                                <h3>Rs.{item.price}/-</h3>

                                                <div className="d-flex w-100 justify-content-between">
                                                    <div className="order_now_btn">
                                                        ORDER NOW
                                                    </div>
                                                    {/* <div className="addtocart">
                                                        <button style={{ cursor: "pointer" }} onClick={() => { alert() }}>cart</button>
                                                    </div> */}
                                                </div>

                                            </div>
                                        </div>
                                        <a href="#">
                                            <div className="story">

                                                {/* <img src={`http://localhost:8000/api${item.image}`} alt="cusine pic" /> */}
                                                <img src={item.image} alt="cusine pic" />
                                            </div>
                                        </a>

                                    </div>

                                ))
                            }
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Menu