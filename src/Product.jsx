import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './Store/CartSlice';
import { NavLink, useParams } from 'react-router-dom';

import App from './App';

const Product = () => {

    const dispatch=useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
          

        }
        getProduct();
    }, []);
    const handleAdd=(product)=>{
         dispatch(add(product));
    }
    return (
        <>

            <div className='container padding'>
                <div className='row'>
                    <div className='col-md-6'>
                    
                        <img src={product.image} alt={product.title} width="360px" height="360px"/>
                    </div>
                    <div className='col-md-6'>
                      
                            <h4 className='fs-1 text-black-50 text-uppercase'>{product.category}</h4>
                       
                            <h1>{product.title}</h1>
                        
                            <p className=''>{product.rating && product.rating.rate}🌟🌟🌟</p>
                             
                             <h2 className='fw-bold'>Rs {product.price}</h2>
                            <p className='lead'>{product.description}</p>
                            <button className='btn btn-outline-dark me-2' onClick={()=>handleAdd(product)}>ADD TO CART</button>
                            <NavLink  to="/cart" className='btn btn-outline-dark '>GO TO CART</NavLink>

                    </div>
                </div>
            </div>
        </>
    );

}
export default Product;
