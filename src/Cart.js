import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { remove } from "./Store/CartSlice";
import { useState,useEffect } from "react";

import Slider from "./Slider";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }
    const [count, setCount] = useState(1);
            if(count==0){
                setCount(1);
            }
    const [price ,setPrice]=useState();
            useEffect(() => {
                    let sum = 0
                    for (let i = 0; i < products.length; i++) {
                      sum += products[i].price
                    }
                    setPrice(sum);
                  
            }, [])
          
            const buyitem=()=>{

            }  
            
    return (
        <>
           
            <div className="container">

                <h1 className="text-center fw-bold py-5">YOUR ITEM 🛒🛒🛒</h1>
                <div className="row align-items-center  justify-content-evenly">
                    {
                        products.map((product, key) => (
                            <div className="col-md-10 " key={product.id} >
                                <div className="row  justify-content-evenly border align-items-center mt-2">
                                    <div className="col-lg-3 text-center p-1">
                                        <div className="shop-image">
                                            <img src={product.image} alt={product.title} width="200" height="200" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 text-center p-1">
                                        <p>{product.title}</p>
                                        <div className="d-flex justify-content-center p-1">
                                            <button className="btn btn-info " onClick={() => setCount(count + 1)}>+</button>
                                            <input type="text" value={count} readOnly className="itemcount" />
                                            <button className="btn btn-info" onClick={() => setCount(count - 1)}>-</button>
                                        </div>

                                        <h2>${`${product.price*count}`}/-</h2>
                                        <p>{product.rating && product.rating.rate}🌟🌟🌟🌟</p>
                                    </div>
                                    <div className="col-lg-3 text-center p-1">
                                        <button className="btn btn-warning" onClick={() => handleRemove(product.id)}>Remove To Cart</button><br/><br/>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto border mt-2">
                     {
                         products.length==0?<h1 className="text-center">Empty Cart</h1>:
                        <><p className="fs-5">{`Total Item  :------------------------------------------------------------------------------------------------ ${products.length}`}</p>
                        <p className="fs-5">{`Total Amount :-------------------------------------------------------------------------------------------- ${products.length==0?"00":price}`}</p>  
                    </>
                     } 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto mt-3">
                    <NavLink to="/contact">
                        <button className="btn btn-primary w-100" onClick={()=>buyitem(products)}>Continue</button>
                    </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;