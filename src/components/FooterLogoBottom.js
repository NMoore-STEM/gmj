import React, {Component} from 'react';
import LogoWhite from './LogoWhite';

class FooterLogoBottom extends Component {
    render() {
        return (
            <div className="footer_logo_full flex_v_center">
                <div className="flex_v_center">
                    <div className="footer_logo_frame">
                        <LogoWhite />
                    </div>
                    <h1>fine art jewelry</h1>
                </div>
                <div className="copyright">COPYRIGHT &#169; 2023 ASC,LLC.</div>
            </div>
        );
    }
}

export default FooterLogoBottom;