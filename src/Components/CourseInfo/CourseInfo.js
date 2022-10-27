import React from 'react';
import './CourseInfo.css';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const CourseInfo = () => {
    const courseInfo = useLoaderData();
    console.log(courseInfo);
    return (
        <div>
            <header className='courseInfo-header'>
                <h2>{courseInfo.name}</h2>
                <p>{courseInfo.shortDetails}</p>
                <p><small><i>Lecturer: {courseInfo.lecturer}</i></small></p>
                <Button className='pdfbtn' >Pdf</Button>

            </header>

            <main>
                <h1 className='text-center mt-5'>{courseInfo.name}</h1>
                <img className='courseImg mt-4' src={courseInfo.image} alt="" />
                <h2 className='description'>Course Description</h2>
                <p className='courseInfo-p'>{courseInfo.moreDetails}</p>

                <Button className='premiumAccessBtn' >Get premium access</Button>
            </main>

        </div>
    );
};

export default CourseInfo;