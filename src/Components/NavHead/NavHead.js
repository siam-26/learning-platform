import React from 'react';
import './NavHead.css';
import { useContext } from 'react';
import logo from './image/c.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import { useState } from 'react';

const NavHead = () => {
    const { user, logOut } = useContext(AuthContext);
    const [darkLightBtn, setDarkLightBtn] = useState(false);



    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" bg="white">
            <Container>

                <Link className='navNames' to='/'><Navbar.Brand href="#home"><img roundedCircle className='logoImg' src={logo} alt="" /> CodersInfo BD</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"><Link className='navNames' to='/'>Home</Link></Nav.Link>
                        <Nav.Link href="#features"><Link className='navNames' to='/coursesFeatures'>Courses</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className='navNames' to='/FAQ'>FAQ</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className='navNames blogs-link' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link href="#pricing">DarkMode
                            {
                                darkLightBtn ?
                                    <FaMoon onClick={() => setDarkLightBtn(!darkLightBtn)}></FaMoon>
                                    :
                                    <FaSun onClick={setDarkLightBtn}></FaSun>
                            }
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <div className='profile-div'>
                                    <Nav.Link href="#deets">
                                        {
                                            user?.photoURL ?
                                                <Image className='userImg' src={user?.photoURL} title={user?.displayName} ></Image>
                                                :
                                                <FaUserCircle className='userIcon'></FaUserCircle>
                                        }

                                    </Nav.Link>
                                    <Nav.Link onClick={logOut} className='headingLogOut' eventKey={2} href="#memes">
                                        <Link className='logOutLink' to='/login'>Log out</Link>
                                    </Nav.Link>


                                </div>

                                :

                                <Nav.Link className='headingLogin' eventKey={2} href="#memes">
                                    <Link className='logInLink' to='/login'>Log in</Link>
                                </Nav.Link>
                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavHead;