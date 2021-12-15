import React, { useEffect, useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navigation from '../Header/Navigation';
import './SingleProduct.css'

const SingleProduct = () => {
    const {id}=useParams()
    const [products,setProducts]=useState([])
    const [singleProduct,setSingleProduct]=useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const foundProduct = products.find(product=>product.id==id)
        setSingleProduct(foundProduct)
    },[products])

    // modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Navigation></Navigation>
            <br />
          <div className="main container my-5">
          <div>
             <img src={singleProduct?.image} className="img-fluid" alt="" />
            </div>
            <div className="detailsP">
                <h4><strong>{singleProduct?.name}</strong></h4>
                <p className="price">৳{singleProduct?.price}</p>
                <p className="det">{singleProduct?.details}</p>
                {
                singleProduct?.amount &&  <p className="amount">Amount : {singleProduct?.amount}</p>
                }
                <button onClick={handleShow} className="custom-button1">Purchase</button>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Work on Progress!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>To buy this Product, please go to our another website. Thank you </Modal.Body>
        <Modal.Footer>
          
        
        <a href="https://perfumancebd.com/beardbroslab/?add-to-cart=5192">
        <button  className="custom-button1">Go to Website</button> 
        </a>
        </Modal.Footer>
      </Modal>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default SingleProduct;