import React from 'react';
import { Row } from 'react-bootstrap';
import useBlogs from '../../Hooks/useBlogs';
import Footer from '../Footer/Footer';
import Navigation from '../Header/Navigation';
import './Blogs.css'
import BlogsCard from './BlogsCard';


const Blogs = () => {
    const[blogs]=useBlogs()
    return (
        <div>
            <Navigation></Navigation>
            <div className="my-5 container">
            <Row xs={1} md={2} className="g-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                 blogs.map(blogs=> <BlogsCard
                  key={blogs.id}
                  blogs={blogs}
                  ></BlogsCard>)
                ))}
            </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;