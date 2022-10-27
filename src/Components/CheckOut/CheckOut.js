import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOut = useLoaderData();

    return (
        <div>
            <h1 className='text-center mt-5 pt-5'>{checkOut.name}</h1>
        </div>
    );
};

export default CheckOut;