import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle ={
        color: 'white'
    };

    return(
        <nav>
            <ul className="nav-links">
               <Link to="/About" style={navStyle}> <li >About</li></Link>
               <Link to="/Shop" style={navStyle}> <li>Shop</li></Link>
               <Link to="/Shop" style={navStyle}> <li>LOGO</li></Link>
               <Link to="/Shop" style={navStyle}> <li>Shop</li></Link>
               <Link to="/Shop" style={navStyle}> <li>Shop</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;