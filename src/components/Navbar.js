import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
const Navbar = () => {
    return (

        <div className='TopBar'>
            <div className='row pt-5'>
                <div className='col-4 offset-4'>
                    <h1 className='text-center text-success'>VARK LEARNING CDM</h1>
                </div>
                <div className='col-4' style={{textAlign: 'right'}}>
                    <Link className='loginBtn btn'>Log in</Link>
                    <Link className='SignupBtn btn mx-4'>Sign up</Link>
                </div>
            </div>

            <div className='container py-5'>
                <ul className='d-flex justify-content-between'>
                    <li className='navBarItems'><Link className='navBarLinks active' to="/">Home</Link></li>
                    <li className='navBarItems'><Link className='navBarLinks' to="/vark">VARK Questionnaire</Link></li>
                    <li className='navBarItems'><Link className='navBarLinks' to="/topic">Topic of Study</Link></li>
                    <li className='navBarItems'><Link className='navBarLinks' to="/pre-test">Pre-Test Questionnaire</Link></li>
                    <li className='navBarItems'><Link className='navBarLinks' to="/recommendations">Recommendations</Link></li>
                    <li className='navBarItems'><Link className='navBarLinks' to="/post-test">Post-Test</Link></li>
                </ul>
            </div>
            
        </div>
    );
}

export default Navbar;