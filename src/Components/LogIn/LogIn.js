import React from 'react';
import './LogIn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const LogIn = () => {
    return (
        <div>

            <Form className='loginForm w-50'>
                <h1 className='mb-5'>Please Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button className='loginBtn' type="submit">
                    Log in
                </Button>


                <ListGroup>
                    <Button className='btnGoogle mt-3'>Login with Google</Button>

                    <Button className='btnGithub mt-4'>Login with Github</Button>
                </ListGroup>

                <p className='mt-4'><small>Need an account? <Link to='/register'>Register now</Link></small></p>
            </Form>

            <Image src='image/c.jpg' />
        </div>
    );
};

export default LogIn;