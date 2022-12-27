import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import App from './App';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Product';
import { Provider } from 'react-redux';
import store from './Store/store';
import Cart from './Cart';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-0svy8tql2uy2576s.us.auth0.com"
    clientId="zzcAhmxIQzIaeMTb7V7acAbFvhfltpvg"
    redirectUri={window.location.origin}
  >
  <Provider store={store} >

  <BrowserRouter>
  
    <App />
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Home/>} />
      <Route path='/register' element={<Home/>} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </BrowserRouter>
  </Provider>
  </Auth0Provider>
);
