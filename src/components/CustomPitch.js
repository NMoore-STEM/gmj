import {Component} from 'react';
import { Link } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';

class CustomPitch extends Component{
    render(){
        return(
            
            <div className="flex_col_center custom_container">
            
                <h5>Can't find that special piece?</h5>
                <p className="center_text custom_body">Let’s work together and create something<br/>
                that speaks to your needs...</p>
                <Link to='/contact' className="custom_button">Custom Request</Link>
            </div>
        )
    }
}

export default CustomPitch