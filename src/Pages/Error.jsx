import React from 'react';
import errorImg from './../assets/error.avif'
import { useNavigate } from 'react-router';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Error = () => {
    const navigate= useNavigate()
    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-5'>
            <h1 className='text-7xl text-primary'>Error 404</h1>
            <h4 className='text-2xl'>Page not found</h4>
            <button className='btn bg-primary' onClick={()=>navigate(-1)}><IoMdArrowRoundBack/> Go Back</button>
        </div>
    );
};

export default Error;