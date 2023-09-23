import {useParams, Link} from 'react-router-dom'
import stockData from '../data/archive/data (full original).json'

function NavBar() {
    const {type} = useParams()
    {stockData.map(itemType => itemType.type === type)}
    return (
        <nav>
            <Link to='store' className="nav_button">STORE</Link>
            <Link to='about' className="nav_button">ABOUT</Link>
            <Link to='contact' className="nav_button">CONTACT</Link>
            <Link to="/store/:type" className="nav_button">TRIAL</Link>
        </nav>
    );
}


export default NavBar;