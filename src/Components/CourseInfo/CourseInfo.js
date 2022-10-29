import React from 'react';
import './CourseInfo.css';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Pdf from "react-to-pdf";


const CourseInfo = () => {
    const courseInfo = useLoaderData();
    const ref = React.createRef();
    return (
        <div>


            <div ref={ref}>
                <header className='courseInfo-header'>
                    <h2>{courseInfo.name}</h2>
                    <p>{courseInfo.shortDetails}</p>
                    <p><small><i>Lecturer: {courseInfo.lecturer}</i></small></p>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button onClick={toPdf} className='pdfbtn' >Pdf</Button>}
                    </Pdf>


                </header>

                <main>
                    <h1 className='text-center mt-5'>{courseInfo.name}</h1>
                    <img className='courseImg mt-4' src={courseInfo.image} alt="" />
                    <h2 className='description'>Course Description</h2>
                    <p className='courseInfo-p'>{courseInfo.moreDetails}</p>

                    <Link to={`/checkout/${courseInfo.id}`}><Button className='premiumAccessBtn' >Get premium access</Button></Link>
                </main>
            </div>
        </div>
    );
};

export default CourseInfo;