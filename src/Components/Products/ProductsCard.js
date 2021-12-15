import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './ProductsCard.css'

const ProductsCard = ({product}) => {
    const {image,name,price,id}=product
   
    return (
        <div>
            <Col>
      <Card className="product-card">
        <img src={image} alt={name} />
        <h6><b>{name}</b></h6>
         
          <div className="d-flex justify-content-center prices">
            
          <p><small>৳{price}</small></p>
          </div>
         
        
        <Link to={`/singleProduct/${id}`}><button className="purchase-button">View Product</button></Link>
      </Card>
    </Col>
        </div>
    );
};

export default ProductsCard;