import React, {Component} from 'react';
import FooterLinks from './FooterLinks';
import FooterLogoBottom from './FooterLogoBottom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <FooterLinks />
                <FooterLogoBottom />
            </footer>
        );
    }
}

export default Footer;