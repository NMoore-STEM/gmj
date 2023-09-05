import {Component} from 'react';
import {Link} from 'react-router-dom'

class SubHeader extends Component{
    render() {
        return (
            <nav>
                <Link to='sale' className="nav_button">SALE ITEMS</Link>
                <Link to='necklaces' className="nav_button">Necklaces</Link>
                <Link to='bracelets' className="nav_button">Bracelets</Link>
                <Link to='earrings' className="nav_button">Earrings</Link>
                <Link to='charms' className="nav_button">Charms</Link>
            </nav>
        )
    }
}

export default SubHeader