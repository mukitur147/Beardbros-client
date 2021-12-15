import React from 'react';
import { Link } from 'react-router-dom';
import './ThirdBanner.css'
import ban3 from '../../Images/info1.jpg'
import cover from '../../Images/cover.jpg'

const ThirdBanner = () => {
    return (
        <>
           <div className="container">
           <div className='third-banner'>
                <div className='ban3-det'>
                    <h2><b><span className='big'>Having</span> a beard for the first time?</b></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste, repellat aliquid voluptate quae soluta corporis cumque similique nemo quidem est doloremque maiores ab beatae quibusdam. Sunt, accusantium impedit officiis, culpa, assumenda necessitatibus sapiente magni laudantium placeat nihil hic? Quibusdam beatae tempore dolorem enim. Velit nam, facere consectetur dicta et quod placeat esse illum quia accusamus dolor molestias mollitia labore vero nobis debitis nemo voluptate numquam explicabo</p>
                    <Link to="/blogs">
                        <button className='custom-button1'> View more blogs</button>
                    </Link>
                </div>
                <div>
                    <img src={ban3} className='img-fluid info3' alt="" />
                </div>
            </div>
           </div>
            
        </>
    );
};

export default ThirdBanner;