import React from 'react';
import coding from './coding.jpg'
import './CarouselHome.css';

const CarouselHome = () => {
    return (
        <div className='codingImgDiv'>

            <img className='codingImg' src={coding} alt='' ></img>
        </div>
    );
};

export default CarouselHome;