import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState();
  let componentMounted = true;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      // const response= await shopdata;
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);

      }
      return () => {
        componentMounted = false;
      }

    }
    getProduct();
  }, [])


  const Loading = () => {
    return (
      <>
      <Skeleton width={300} height={400}/>
      </>
    )
  }
  const filterproduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const Showproduct = () => {
    return (

      <div className='buttons'>
        <button className='btn btn-outline-dark me-1 mb-1' onClick={() => setFilter(data)}>All</button>
        <button className='btn btn-outline-dark me-1 mb-1' onClick={() => filterproduct("women's clothing")}>Woman's Clothing</button>
        <button className='btn btn-outline-dark me-1 mb-1' onClick={() => filterproduct("men's clothing")}>Men's Clothing</button>
        <button className='btn btn-outline-dark me-1 mb-1' onClick={() => filterproduct("jewelery")}>Jewelery</button>
        <button className='btn btn-outline-dark me-1 mb-1' onClick={() => filterproduct("electronics")}>Electronic</button>
      </div>



    );


  }
  return (
   
    <>
       
      <div className='container-fluid'>
        <div className='container padding'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className='fw-bold'>Latest Products</h1>
              <hr />
            </div>
          </div>
          <div className='row'>
            <div className='text-center col-12 padding'>

             <Showproduct />

            </div>
          </div>
          <div className='row gy-3 pt-4'>
            {
              filter.map((product,key) => {
                return (
                  <>
                    <div className='col-md-3' key={product.id}>
                      <div className="card h-100 text-center p-4" >
                        <img src={product.image} key={product.id} className="card-img-top" alt="{product.title}" height="250px" />
                        <div className="card-body">
                          <p className="card-text">{product.title.substring(0, 12)}...</p>
                          <p className='card-text fw-bold'>Rs{product.price}</p>
                          <NavLink to={`/Products/${product.id}`} className=" btn btn-outline-dark">Buy now</NavLink>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Products;