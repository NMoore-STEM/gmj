import {Component} from 'react';
import FilterDash from '../components/FilterDash';
import {stockData} from '../data/data';

class Necklaces extends Component{
    render(){
        // const items = stockData["necklace"];

        return(
            <div className="page_container">
                <div className="left_side_full">
                    <FilterDash />
                </div>
                <div className="store_main">
                    <div className="page_title_frame">
                        <h2 className="page_title">NECKLACES</h2>
                    </div>
                    <div>
                        {{stockData}[0].map((item) =>(
                            <div key={item["id"]}>
                                <h3>{item["name"]}</h3>
                                <p className="item_descr_short">{item["shortDescr"]}</p>
                            </div>
                        ))}
                    </div>
                    <img alt={""}></img>
                </div>
            </div>
        )
    }
}

export default Necklaces