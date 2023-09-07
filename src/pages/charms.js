import {Component} from 'react';
import FilterDash from '../components/FilterDash';
import CardsCharm from '../components/CardsCharm';

class Charms extends Component{
    render(){

        return(
            <div className="page_container">
                <div className="left_side_full">
                    <FilterDash />
                </div>
                <div className="store_main">
                    <div className="page_title_frame">
                        <h2 className="page_title">CHARMS</h2>
                    </div>
                    <CardsCharm />
                    <img src={require("../images/charms/charms-splash.png")} alt={"Woman standing facing Roman ruins wearing jewelry."} />
                </div>
            </div>
        )
    }
}

export default Charms