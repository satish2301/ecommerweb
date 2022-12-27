import React from 'react';
import satish from './Image/satish.jpg';
import {FaFacebookSquare,FaLinkedin} from 'react-icons/fa';
import {RiWhatsappFill} from 'react-icons/ri';

const Footer = () => {
  return (
    <>
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='row justify-content-evenly gy-2 border'>
                    <div className='col-md-4'>
                         <h1>SC Shoping Mall</h1>
                         <div className='text-center pt-2'>
                            <img src={satish} alt="profile" className='footer-img'/>
                         </div>
                         <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                         <div className='d-flex justify-content-around'>
                             <p className='footer-icon'><FaFacebookSquare/></p>
                             <p className='footer-icon'><FaLinkedin/></p>
                             <p className='footer-icon'><RiWhatsappFill/></p>
                         </div>
                    </div>
                    <div className='col-md-4 footer-product '>
                        <h1 className=''>Products</h1>
                        <ul>
                          <li>ALL</li>
                          <li>Women's Clothing</li>
                          <li>Mens's Clothing</li>
                          <li>Jewelery</li>
                          <li>Electronic</li>
                        </ul>
                    </div>
                    <div className='col-md-4 footer-contact '>
                        <h1 className=''>Contacts</h1>
                        <p className='footer-contact-icon'>⚓ Majhola Linepar Moradabad</p>
                        <p>📞 +91-000-8987-767</p>
                        <p>📩 scshopingmall@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='row'>
               <div className='col-12 text-center'>
                   <h5>© 2022 Copyright sctechnical.com</h5>
               </div>
            </div>
        </div>
    </>
  )
}

export default Footer;