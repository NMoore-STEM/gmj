import {Component} from 'react';
import LogoBlack from './LogoBlack';

class LogoHeader extends Component {
    render() {
        return (
            <div className='logo_header_box1'>
                <div className='logo_header_box2'>
                    <LogoBlack />
                </div>
            </div>
        );
    }
}
 
export default LogoHeader;