import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-img'>
            <div className='banner-text mobile-res'>
                <h1 className='font-bold text-white text-5xl w-1/4 text-center'>A Guide to Thai and Chinese Famous Foods</h1>
                <p className='text-white text-2xl font-bold w-1/4 text-center pt-2'>Thai food is characterized by its use of herbs and spices like lemongrass and kaffir lime leaves, while Chinese cuisine features regional diversity and savory flavors from ingredients such as soy sauce and five spice powder</p>
            </div>
        </div>
    );
};

export default Banner;