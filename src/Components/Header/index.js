import React from 'react';
import { Link } from 'react-router-dom'

import './header.css';

function Header(){
        return(
            <header className="header">
                <ul className="menu">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                    <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                    <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>  
            </header>
        )
}

export default Header;