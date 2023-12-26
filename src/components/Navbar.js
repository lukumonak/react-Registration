import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(){

    const[click,setClick]=useState(false);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false)
    return (
       <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">Navojyoti </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                            ABOUT US
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/registration' className='nav-links' onClick={closeMobileMenu}>
                            REGISTRATION
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/contactUs' className='nav-links' onClick={closeMobileMenu}>
                            CONTACT US
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/joinUs' className='nav-links' onClick={closeMobileMenu}>
                            JOIN US
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
       </>
    );
}
export default Navbar;