import React, {Component} from 'react'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <a href="store.html" className="nav_button">STORE</a>
                <a href="about.html" className="nav_button">ABOUT</a>
                <a href="contact.html" className="nav_button">CONTACT</a>
            </nav>
        );
    }
}


export default NavBar;