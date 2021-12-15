import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navigation from '../Header/Navigation';
import './SingleBlog.css'

const SingleBlogs = () => {
    const{id}=useParams()
    const [blogs,setBlogs]=useState([])
    const [singleBlog,setSingleBlog]=useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    useEffect(()=>{
        const foundblog = blogs.find(blog=>blog.id==id)
        setSingleBlog(foundblog)
    },[blogs])


    return (
        <div>
        <Navigation></Navigation>
        <br />
      <div className="main container my-5">
      <div>
         <img src={singleBlog?.image} className="img-fluid blog-image2" alt="" />
        </div>
        <div className="detailsP">
            <h4 className=" ms-5"><strong>This is Blog Heading</strong></h4>
            <p className="det ms-5">{singleBlog?.details}</p>
            <Link className='ms-5 back' to="/blogs">Back to all blogs</Link>
        </div>
        
      
    
   
      </div>
      <Footer></Footer>
    </div>
    );
};

export default SingleBlogs;