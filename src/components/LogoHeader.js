import {Component} from 'react';
import {Link} from 'react-router-dom';
import Home from '../pages/home';
import LogoBlack from './LogoBlack';

class LogoHeader extends Component {
    render() {
        return (
            <Link to='/' className='logo_header_box1' element={<Home/>}>
            {/* <div className='logo_header_box1'> */}
                <div className='logo_header_box2'>
                    <LogoBlack />
                </div>
            {/* </div> */}
            </Link>
        );
    }
}
 
export default LogoHeader;