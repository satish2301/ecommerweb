import React,{useEffect,useState} from 'react';
import './App.css';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdAddShoppingCart } from 'react-icons/md';
import { NavLink, useRouteLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated ,user ,isLoading } = useAuth0();
  const items = useSelector((state) => state.cart);
  return (
    <div className='container-fluid'>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">SC Shoping Mall</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fs-2 pt-2">☰</span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="products">Product</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about">About</NavLink>
                </li> 
                <li className="nav-item">
                  <NavLink className="nav-link" to="contact">Contact</NavLink>
                </li>

              </ul>
              <div className=''>
                {
                  isAuthenticated ? (
                    <NavLink to='register' className='btn btn-outline-dark me-2' onClick={() => logout({ returnTo: window.location.origin })}>
                      <AiOutlineUsergroupAdd className='me-2' />
                      Logout</NavLink>
                  ) :
                    (
                      <NavLink to='login' className='btn btn-outline-dark me-2 ' onClick={() => loginWithRedirect()}>
                        <BiLogIn className='me-2' />
                        Login</NavLink>
                    )

                }


                <NavLink to='cart' className='btn btn-outline-dark me-2'>
                  <MdAddShoppingCart className='me-2' />
                  Cart <span className='bg-danger text-white p-1 rounded'>{items.length}</span></NavLink>

               {
                isAuthenticated ?
                <img src={`https://avatars.abstractapi.com/v1/?api_key=7a2aaa4a278c4d448847f4cb2e782da3&name=${user.name}`} className="usericon"/>
                :
                null
               } 
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;