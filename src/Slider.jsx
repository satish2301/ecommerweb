import React from "react";
import Background from './Image/background.avif';
import Background1 from './Image/background1.jpeg';
const Slider=()=>{
    return(
        <>
                
       <div className=' slider'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://wallpaperaccess.com/full/418920.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Background1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Background} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Background1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/photos/empty-shopping-mall-picture-id511522782?k=20&m=511522782&s=612x612&w=0&h=deSJO-YF1PMCreqiVb1YVBe6TCvuOQtbGMGMUJT42Ps=" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/photos/modern-club-interior-picture-id488976672?k=20&m=488976672&s=612x612&w=0&h=cWu_RMM6BqLbSs_uJqBZGLg7P0Yp_CSYHDD_fjSbQRE=" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
        </>
    );
}


export default Slider;