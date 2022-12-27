import React from 'react'
import Footer from  "./Footer";
const Contact = () => {

  const confirmhandler = (e) => {
    e.preventDefault();
    alert("submit your order");
  }
  return (
    <div className='container-fluid'>
      <div className='container border'>
        <div className='row p-5 justify-content-evenly'>
          <div className='col-md-3 col-12'>
            <img src="https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=250&q=60" style={{ borderRadius: "10px",width:"100%" }} />
          </div>
          <div className='col-md-7 col-12'>
            <div>
              <h1 className='text-center'>Have a nice day....</h1>
            </div>
            <form>
              <div>
                <label className='fs-5'>Name</label>
                <input type="text" placeholder='Enter your name' className="w-100 p-2" />
              </div>
              <div>
                <label className='fs-5'>Mobile_Number</label>
                <input type="text" placeholder='Enter your Number' className="w-100 p-2" />
              </div>
              <div>
                <label className='fs-5'>Address</label>
                <textarea className='w-100 p-2' placeholder='Address'></textarea>
              </div>
              <div className='mt-1'>
                <button className='btn btn-success' onClick={confirmhandler}>Confirm Oder</button>
              </div>
            </form>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Contact