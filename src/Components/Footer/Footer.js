import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="main-footer">
        <div className="footer container">
            <div>
               <h6>NEWSLETTER</h6>
               <p>Subscribe to be the first to hear about our exclusive offers and letter arrivals.</p> 
               <input type="email" placeholder="email@example.com" />
               <button className="subscribe">GO</button> 
            </div>
            <div>
                <h6>CUSTOMER SUPPORT</h6>
                <p>Contact Us</p>
                <p>Return/Refunds</p>
                <p>Shipping FAQs</p>
                
             
            </div>
            
            <div>
                <h6>GET IN TOUCH</h6>
                <p> contact@perfumancebd.com</p>
                <p></p>
                <p>Paka Masjid Market, Khilgaon, Dhaka</p>
            </div>
        </div>
        <p className="mt-4 dev">Developed by - Mukitur Rahman Tilok</p>
    </div>
    );
};

export default Footer;