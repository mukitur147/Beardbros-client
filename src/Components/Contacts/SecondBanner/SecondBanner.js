import React from 'react';
import { Link } from 'react-router-dom';
import './SecondBanner.css'

const SecondBanner = () => {
    return (
        <div className='container'>
            <div className='second-banner'>
                <div className='banner-bg1'>
                  <h6>GROW IT</h6>
                  <h5>Just Starting?</h5>
                  <Link to="/shop"><button className='custom-button1'> TRY A GROWTH KIT</button></Link>
                  
                </div>
                <div className='banner-bg2'>
                    <h6>GROOM IT</h6>
                    <h5>Luscious Beard?</h5>
                    
                    <Link to="/shop"><button className='custom-button1'>TRY A GROOM KIT</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;