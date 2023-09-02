import React, {Component} from 'react';
import FooterLinks from './FooterLinks';
import FooterLogoBottom from './FooterLogoBottom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer_top">
                    <FooterLinks />
                    <div className="map_container">
                        <div className="zip_code_search">
                            <span>Store Locator</span>
                            <input></input>
                            <button>go</button>
                            {/* <GoButton /> */}
                        </div>
                        <div className="map_area"></div>
                        {/* <googleMap /> */}
                    </div>
                </div>
                <FooterLogoBottom />
            </footer>
        );
    }
}

export default Footer;