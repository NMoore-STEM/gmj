import {Component} from 'react';
import {Link} from 'react-router-dom';
// import SubHeader from '../components/SubHeader';
// import CustomPitch from '../components/CustomPitch';

class Store extends Component{
    render() {
        return (
        <>
        <div>
            <div><h2>STORE</h2></div>
            <img alt={""}></img>
            <div>
                <div>
                    <div><Link to='sale'><img alt={""}></img></Link></div>
                    <div><Link to='/store/necklaces'><img alt={""}></img></Link></div>
                    <div><Link to='bracelets'><img alt={""}></img></Link></div>
                    <div><Link to='earrings'><img alt={""}></img></Link></div>
                    <div><Link to='charms'><img alt={""}></img></Link></div>
                </div>
            </div>
        </div>
        <img alt={""}></img>
        </>
        )
    }
}

export default Store