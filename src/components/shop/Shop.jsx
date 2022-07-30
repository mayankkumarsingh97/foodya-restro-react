import React, { useState, useEffect } from 'react';
import "./shop.css"


function Shop() {
    const [products, setProducts] = useState([]);
    const [addtoCart, setAddtoCart] = useState({})
    const addToChartHandler = () => {
        setAddtoCart({ name: "Mayank", age: "21", std: "6th" })
        alert(JSON.stringify(addtoCart))
    }
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => setProducts(json))
        
    }, []);
    console.log(products)
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {products.map((item, key) => (
                        <div className="col-md-3  shadow m-3 wrapper border-radius">
                            <div className="title">{item.title}</div>
                            <div className="img_cl">
                                <img src={item.image} alt="" />
                            </div>
                            {/* <div className="">{item.description}</div> */}
                            <div className="price">${item.price} only</div>
                            <div className="d-flex justify-content-between cart_wrapper">
                                <button onClick={addToChartHandler} type='text' className="btn add_to_cart">
                                    Add to Cart
                                </button>
                                <button type='text' className=" btn know_more">
                                    know more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Shop