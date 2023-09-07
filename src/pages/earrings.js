import {Component} from 'react';
import FilterDash from '../components/FilterDash';
import CardsEarr from '../components/CardsEarr';

class Earrings extends Component{
    render(){

        return(
            <div className="page_container">
                <div className="left_side_full">
                    <FilterDash />
                </div>
                <div className="store_main">
                    <div className="page_title_frame">
                        <h2 className="page_title">EARRINGS</h2>
                    </div>
                    <CardsEarr />
                    <img src={require("../images/earrings/earrings-splash.png")} alt={"Woman standing facing Roman ruins wearing jewelry."} />
                </div>
            </div>
        )
    }
}

export default Earrings