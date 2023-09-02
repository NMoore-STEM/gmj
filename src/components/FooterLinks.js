import React, {Component} from 'react';
import FooterLinkHover from './FooterLinkHover';

class Footerlinks extends Component {
    render() {
        return (
            <div className="footer_left">
                <ul>
                    <li>
                        <a href='index.html'>Home</a>
                        <FooterLinkHover />
                    </li>
                    <li>
                        <a href='about.html'>About</a>
                        <FooterLinkHover />
                    </li>
                    <li>
                        <a href='contact.html'>Contact</a>
                        <FooterLinkHover />
                    </li>
                    <li>
                        <a href='sale.html'>SALE ITEMS</a>
                        <FooterLinkHover />
                    </li>
                    <li>
                        <a href='store.html'>Store</a>
                        <FooterLinkHover />
                    </li>
                    <li>
                        <a href='returns.html'>Returns Policy</a>
                        <FooterLinkHover />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footerlinks;