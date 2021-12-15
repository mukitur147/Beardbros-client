import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import ProductsCard from './ProductsCard';
import './Products.css'
import { Link } from 'react-router-dom';


const Products = () => {
    const[products]=useProducts()
    return (
        <>
        <div className="container my-5">
            <h2  className="title"><b>Products</b></h2>
            <div className="my-4">
            <Row xs={2} md={4} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                 products.slice(0,4).map(product=> <ProductsCard
                  key={product.id}
                  product={product}
                  ></ProductsCard>)
                ))}
            </Row>
            </div>
            <div className="a">
            
            <Link to="/shop"><button className="custom-button1">View All
            </button></Link>
            </div>
             </div>
        </>
    );
};

export default Products;