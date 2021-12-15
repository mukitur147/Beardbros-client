import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Footer from '../Footer/Footer';
import Navigation from '../Header/Navigation';
import ProductsCard from '../Products/ProductsCard';

const Shop = () => {
    const[products]=useProducts()
    return (
        <div>
            <Navigation></Navigation>
            <div className="container my-5">
            <h2  className="title"><b>All Of Our Products</b></h2>
            <div className="my-4">
            <Row xs={2} md={3} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                 products.map(product=> <ProductsCard
                  key={product.id}
                  product={product}
                  ></ProductsCard>)
                ))}
            </Row>
            </div>
            
             </div>
             <Footer></Footer>
        </div>
    );
};

export default Shop;