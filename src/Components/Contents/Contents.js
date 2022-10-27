import React from 'react';
import './Contents.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const Contents = ({ details }) => {
    const { name, image, lecturer, lectures, duration, shortDetails } = details;

    return (
        <div className='contents-div'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div>
                        <span className='span'><small>{lecturer}</small></span>
                        <span className='span ps-4'><small>{lectures} classes</small></span>
                        <span className='span ps-4'><small>{duration}</small></span>
                    </div>
                    <Card.Title className='mt-2'>{name}</Card.Title>
                    <Card.Text className='shortDetails mt-3'>{shortDetails}</Card.Text>
                    <Link to={`/course-info/${details.id}`}><Button className='mt-3 contents-details-btn' variant="primary">Details</Button></Link>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Contents;