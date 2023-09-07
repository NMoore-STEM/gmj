import {Component} from 'react';
import {Link} from 'react-router-dom';
// import SubHeader from '../components/SubHeader';
// import CustomPitch from '../components/CustomPitch';

class Store extends Component{
    render() {
        return (
        <>

            <div className="store_menu">
                <div className="page_title_frame">
                    <h2 className="page_title">STORE</h2>
                </div>
                <img className="menu_bg" src={require("../images/store/store-splash.png")} alt={"An assortment of jewelry."} />

                <div className="menu_black_box">
                    <div className="flex_v_center">
                        <div className="store_menu_item"><Link to='sale'><img src={require("../images/necklaces/016.png")} alt={""}></img></Link></div>
                        <div className="store_menu_item"><Link to='/store/necklaces'><img src={require("../images/necklaces/006.png")} alt={""}></img></Link></div>
                        <div className="store_menu_item"><Link to='bracelets'><img src={require("../images/bracelets/022.png")} alt={""}></img></Link></div>
                        <div className="store_menu_item"><Link to='earrings'><img src={require("../images/earrings/031.png")} alt={""}></img></Link></div>
                        <div className="store_menu_item"><Link to='charms'><img src={require("../images/charms/051.png")} alt={""}></img></Link></div>
                    </div>
                </div>
            </div>
        <img alt={""}></img>
        </>
        )
    }
}

export default Store