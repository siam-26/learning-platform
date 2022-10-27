import React from 'react';
import './FAQ.css';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Some most asked questions answers:</h1>
            <Accordion className='mt-5 pt-5 w-50 accordion-main'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>What are the importances to learn Data structures and Algorithms?</b></Accordion.Header>
                    <Accordion.Body>
                        Data structures and algorithms (DSA) goes through solutions to standard problems in detail and gives you an insight into how efficient it is to use each one of them. It also teaches you the science of evaluating the efficiency of an algorithm. This enables you to choose the best of various choices.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>Is it important to learn Operating System?</b></Accordion.Header>
                    <Accordion.Body>
                        An operating system is the most important software that runs on a computer. It manages the computer's memory and processes, as well as all of its software and hardware. It also allows you to communicate with the computer without knowing how to speak the computer's language.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Is Math needed to learn programming?</b></Accordion.Header>
                    <Accordion.Body>
                        To be a better programmer one must know at least a very little of Discrete Mathematics, Linear Algebra, Calculus, Probability, Cryptography, Geometry and Statistics.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default FAQ;