import React from 'react';
import './LogIn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const LogIn = () => {
    const [error, setError] = useState('');
    const { googlePopUp, usersignIn, githubPopup } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //sign in 
    const signInHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        usersignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    //google popup
    const googlePopUpHandler = () => {
        googlePopUp(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);

            })
    }

    //github popup
    const githubPopupHandler = () => {
        githubPopup(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>

            <Form onSubmit={signInHandler} className='loginForm w-50'>
                <h1 className='mb-5'>Please Login</h1>
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
                    Log in
                </Button>


                <ListGroup>
                    <Button onClick={googlePopUpHandler} className='btnGoogle mt-3'>Login with Google</Button>

                    <Button onClick={githubPopupHandler} className='btnGithub mt-4'>Login with Github</Button>
                </ListGroup>

                <p className='mt-4'><small>Need an account? <Link to='/register'>Register now</Link></small></p>
            </Form>
        </div>
    );
};

export default LogIn;