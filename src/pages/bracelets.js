import {Component} from 'react';
import FilterDash from '../components/FilterDash';
import CardsBrace from '../components/CardsBrace';

class Bracelets extends Component{
    render(){

        return(
            <div className="page_container">
                <div className="left_side_full">
                    <FilterDash />
                </div>
                <div className="store_main">
                    <div className="page_title_frame">
                        <h2 className="page_title">BRACELETS</h2>
                    </div>
                    <CardsBrace />
                    <img src={require("../images/bracelets/bracelets-splash.png")} alt={"Woman standing facing Roman ruins wearing jewelry."} />
                </div>
            </div>
        )
    }
}

export default Bracelets