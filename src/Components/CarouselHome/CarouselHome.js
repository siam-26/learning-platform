import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css';

const CarouselHome = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://thumbs.dreamstime.com/b/learning-studying-woman-using-laptop-computer-cafe-working-portrait-beautiful-student-notebook-thinking-female-freelancer-70080723.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://potomac.edu/wp-content/uploads/2020/12/benefits-of-coding-e1606911064541.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.shutterstock.com/shutterstock/photos/175434071/display_1500/stock-photo-imagination-xray-brain-isolated-on-black-background-175434071.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselHome;