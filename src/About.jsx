import React from 'react'
import Slider from './Slider';
import Footer from "./Footer";
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
const About = () => {
  return (
    <div >
      <Slider />
      <div className='container-fluid'>
        <div className='container'>
          <div className='row pt-5 gy-2 justify-content-evenly'>
            <div className='col-md-4'>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=250&q=60" style={{ borderRadius: "100px", width: "100%" }} />
            </div>
            <div className='col-md-6 col-12 '>
              <h3>About me!.</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad tempora nobis facilis quod sint ab aliquam voluptates quia? Soluta voluptatibus dolor tenetur culpa excepturi consequatur dolorem pariatur perspiciatis in vel consectetur laudantium numquam, exercitationem quae atque deserunt necessitatibus! Neque facere accusantium perferendis! Molestias sunt iusto exercitationem quidem cumque minus sed. Ullam cupiditate iure soluta officia, aut dolore laborum nemo odit animi, debitis delectus distinctio sed magnam non exercitationem. Earum natus culpa magnam facilis odit, sit et, eaque nemo cupiditate architecto, adipisci illo minima obcaecati. Perspiciatis, tempore architecto nihil enim soluta, eos fugit tenetur vel accusantium similique quia? Natus, libero excepturi?</p>

              <div>
                <button className='btn btn-success'>More Info..</button>
              </div>
              <div className='d-flex pt-2'>
                <p className='footer-icon me-3'><FaFacebookSquare /></p>
                <p className='footer-icon me-3'><FaLinkedin /></p>
                <p className='footer-icon'><RiWhatsappFill /></p>
              </div>
            </div>
          </div>
          <div className='row pt-5 '>
            <div className='col-12 text-center'>
              <h1>Our Testimonals..😀</h1>
            </div>
           </div>
           <div className='row pt-2 pb-4 gy-4 justify-content-evenly'> 
            <div className='col-md-3  col-12'>
              <div class="card" style={{width:"100%"}}>
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Ashish Saxena</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">More Info</a>
                </div>
    
              </div>
            </div>
            <div className='col-md-3 col-12'>
              <div class="card" style={{width:"100%"}}>
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Ashish Saxena</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">More Info</a>
                </div>
    
              </div>
            </div>
            <div className='col-md-3 col-12'>
              <div class="card" style={{width:"100%"}}>
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Ashish Saxena</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">More Info</a>
                </div>
    
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About