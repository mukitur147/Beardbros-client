import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <div className='container features my-5'>
         <div className="features-box">
           <div>
           <img src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-free-delivery-food-delivery-wanicon-lineal-wanicon.png"/>
           </div>
           <div className="ms-3">
            <h5>Free Home Delivery</h5>
            <p>Provide free home delivery for all products</p></div>
         </div>
         <div className="features-box">
             <div>
             <img src="https://img.icons8.com/ios/50/000000/trust--v1.png"/>
             </div>
             <div className="ms-3">
             <h5>Quality Products</h5>
             <p>We ensure the product quality that is our main goal</p>
             </div>
         </div>
         <div className="features-box">
             <div>
             <img src="https://img.icons8.com/ios/50/000000/return.png"/>
             </div>
             <div className="ms-3">
             <h5>3 Days Return</h5>
             <p>Return Product within 3 days for any product</p>
             </div>
         </div>
         <div className="features-box">
          <div>
          <img src="https://img.icons8.com/ios/50/000000/online-support.png"/>
          </div>
          <div className="ms-3">
          <h5>Online Support</h5>
            <p>24/7 Online Support Facility for our customers</p>  
        </div>   
        </div>   
        
        </div>
    );
};

export default Features;