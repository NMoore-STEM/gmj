import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to='store' className="nav_button">STORE</Link>
                <Link to='about' className="nav_button">ABOUT</Link>
                <Link to='contact' className="nav_button">CONTACT</Link>
            </nav>
        );
    }
}


export default NavBar;