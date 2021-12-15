import React from 'react';
import { Form } from 'react-bootstrap';
import Navigation from '../Header/Navigation';
import './Contacts.css'
import logo from '../../Images/logo.png'
import Footer from '../Footer/Footer';
import Features from '../Features/Features';

const Contacts = () => {
    return (
        <>
           <Navigation></Navigation>
           <div className='main-about container'>
               <div>
               <div className="container left-align terms my-5"> 
            <h4 className="my-4"><b>Refund and Return Policies</b></h4>
           
            <h4><b>Refunds</b></h4>
            <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
            <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
            <h6>Late or missing refunds</h6>
            <p>If you haven’t received a refund yet, first check your bank account again.</p>
            <p>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
            <p>Next contact your bank. There is often some processing time before a refund is posted.</p>
            <p>If you’ve done all of this and you still have not received your refund yet, please contact us at email.</p>
            <h6>Sale Items</h6>
            <p>Only regular priced items may be refunded. Sale items cannot be refunded.</p>
            <h4><b>Exchanges</b></h4>
            <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at and send your item to: .</p>
            
            
    
        </div>
               </div>
               <div>
               <div className="container my-5 contact">
               
            <h4><b>CONTACT WITH US</b></h4>
            <img src={logo} className='img-fluid img22' alt="" />
            <p ><small>If you have any questions in regards to your order or general inquiries about our site feel free to contact with us at anytime . Our customer support agents  are available 24/7 and should respond within 24 hours</small></p>
            
            <Form.Control  size="sm" type="text" placeholder="Your Name" /> <br />
            <Form.Control  size="sm" type="email" placeholder="Your Email" /> <br />
            <Form.Control size="sm" type="number" placeholder="Phone Number" /> <br />
            <Form.Group   className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Control className="text-msg" size="sm" placeholder="Your Message"  as="textarea" rows={3} />
            </Form.Group>
            <button className="custom-button1">Send</button>
            
            </div>
               </div>
              
           </div>
           <Features></Features>
           <Footer></Footer>
        </>
    );
};

export default Contacts;