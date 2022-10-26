import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHead from '../NavHead/NavHead';


const Header = () => {
    return (
        <div>
            <NavHead></NavHead>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;