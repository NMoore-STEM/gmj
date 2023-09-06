import {Component} from 'react';
import {Link} from 'react-router-dom'

class SubHeader extends Component{
    render() {
        return (
            <nav className="sub_header">
                <Link to='sale' className="sub_nav_button">SALE ITEMS</Link>
                <Link to='necklaces' className="sub_nav_button">Necklaces</Link>
                <Link to='bracelets' className="sub_nav_button">Bracelets</Link>
                <Link to='earrings' className="sub_nav_button">Earrings</Link>
                <Link to='charms' className="sub_nav_button">Charms</Link>
            </nav>
        )
    }
}

export default SubHeader