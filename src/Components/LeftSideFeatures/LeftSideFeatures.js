import React from 'react';
import './LeftSideFeatures.css';
import { Link } from 'react-router-dom';

const LeftSideFeatures = ({ features }) => {
    const { name } = features;
    return (
        <div className='features-div mt-5'>
            <h6 className='names'><Link className='featuresDetailsLink' to={`/course-info/${features.id}`}>{name}</Link></h6>
        </div>
    );
};

export default LeftSideFeatures;