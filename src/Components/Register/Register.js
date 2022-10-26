import React from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateProfileUpdate } = useContext(AuthContext);

    //create user Email-Password
    const createrUserHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                updateUserProfileHandler(name, photoURL);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    //Update user profile
    const updateUserProfileHandler = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileUpdate(profile)
            .then(() => {

            })
            .catch(error => {

            })
    }
    return (
        <div>
            <Form onSubmit={createrUserHandler} className='loginForm w-50'>
                <h1 className='mb-5'>Register now</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photourl" placeholder="photo URL" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <p className='text-danger'>{error}</p>

                <Button className='loginBtn' type="submit">
                    Register now
                </Button>
                <p className='mt-4'><small>Already have an account? <Link to='/login'>Log in</Link></small></p>
            </Form>
        </div>
    );
};

export default Register;