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
                        <h3>―Henry Ford</h3>
                        <p className='quotes'> <i>“Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.”</i></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://potomac.edu/wp-content/uploads/2020/12/benefits-of-coding-e1606911064541.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>― Confucius</h3>
                        <p className='quotes'><i>“Learn as if you were not reaching your goal and as though you were scared of missing it”</i></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img d-block w-100"
                        src="https://image.shutterstock.com/shutterstock/photos/175434071/display_1500/stock-photo-imagination-xray-brain-isolated-on-black-background-175434071.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>― Albert Einstein</h3>
                        <p className='quotes'>
                            <i>“Intellectual growth should commence at birth and cease only at death.”</i>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselHome;