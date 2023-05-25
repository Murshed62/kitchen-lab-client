import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import useTitle from '../hooks/useTitle';
const ErrorPage = () => {
    useTitle('404-page not found');
    return (
        <div className='error-img'>
            <Link className='home-redirect' to='/'><FaHome className='mx-auto pt-1'></FaHome> Home</Link>
        </div>
    );
};

export default ErrorPage;