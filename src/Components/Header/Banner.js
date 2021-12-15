import React from 'react';
import './Banner.css'
import banner1 from '../../Images/spice.jpeg'
import Button from '@restart/ui/esm/Button';
import free from '../../Images/free3.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
        <div className="banner container">
        <div className="banner-text">
        <h2>Shop Beard care with</h2>
        <h1><span>Free Shipping</span>
        <img src={free} className="free" alt="" />
        </h1> 
        <p>Great selection of products not just for facial hair but for general male grooming. Delivery is FREE which is always nice to see and arrives promptly.</p>
        <Link to="/shop"><Button className="custom-button3">Explore Shop <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-right-arrow-arrow-flatart-icons-solid-flatarticons-4.png"/>
        </Button></Link>
        </div>  
        <div>
        <img src={banner1} className="banner1" className="img-fluid" alt="" />
        </div>   
        </div>   
        </>
    );
};

export default Banner;