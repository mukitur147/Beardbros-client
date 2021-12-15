
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BlogsCard.css'

const BlogsCard = ({blogs}) => {
    const {image,details,id}=blogs
    return (
        <div className='container blogs'>
            
            <div className="blogs-card">
        
            <div>
            <img src={image} className=' blog-image' alt='' />
            </div>
        
            <div className='blog-details'>
            <p>{details.slice(0,200)}. . . </p>
            <Link to={`/singleBlogs/${id}`}>Read more</Link>
            </div>
       
         </div>
    
        </div>
    );
};

export default BlogsCard;