import React from 'react';
import './CourseFeatures.css';
import { useLoaderData } from 'react-router-dom';
import LeftSideFeatures from '../LeftSideFeatures/LeftSideFeatures';
import Contents from '../Contents/Contents';

const CoursesFeatures = () => {
    const courseFeatures = useLoaderData();

    return (
        <div className='courseFeatures-container'>
            <div className='leftSideBar'>
                {
                    courseFeatures.map(features => <LeftSideFeatures key={features.id}
                        features={features}
                    ></LeftSideFeatures>)
                }
            </div>

            <div className='contents'>
                {
                    courseFeatures.map(details => <Contents
                        key={details.id}
                        details={details}></Contents>)
                }
            </div>
        </div>
    );
};

export default CoursesFeatures;