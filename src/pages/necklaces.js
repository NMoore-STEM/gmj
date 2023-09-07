import {Component} from 'react';
import FilterDash from '../components/FilterDash';
import CardsNeck from '../components/CardsNeck'

class Necklaces extends Component{
    render(){

        return(
            <div className="page_container">
                <div className="left_side_full">
                    <FilterDash />
                </div>
                <div className="store_main">
                    <div className="page_title_frame">
                        <h2 className="page_title">NECKLACES</h2>
                    </div>
                        <CardsNeck />
                    <img src={require("../images/necklaces/necklace-splash.png")} alt={"Two females sitting on a couch laughing together adorned with jewelry."}></img>
                </div>
            </div>
        )
    }
}

export default Necklaces