import {Component} from 'react';
import FilterDash from '../components/FilterDash';
// import stockData from '../data/necklaces.json';
// import Exp from './Exp';
import CardsNeck from '../components/CardsNeck'

class Necklaces extends Component{
    render(){
        // const items = stockData[0];

        return(
            <div className="page_container">
                <div className="left_side_full">
                    <FilterDash />
                </div>
                <div className="store_main">
                    <div className="page_title_frame">
                        <h2 className="page_title">NECKLACES</h2>
                    </div>
                    {/* <Exp /> */}
                    {/* <div className="card_container">
                        {stockData && stockData.map(item => {
                            return (
                                
                            <div className="item_card" key={ item.id }>
                                <div className="item_img_frame">
                                    <img className="card_img" src={require("../images/necklaces/" + item.id + ".png")} alt={""} />
                                </div>
                                <div className="card_text_box">
                                    <div className="card_text_left">
                                        <h5 className="card_title">{item.name}</h5>
                                        <p className="item_descr_short">{item.shortDescr}</p>
                                    </div>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                            
                        )})} */}
                        <CardsNeck />
                    {/* </div> */}
                    <img src={require("../images/necklaces/necklace-splash.png")} alt={"Two females sitting on a couch laughing together adorned with jewelry."}></img>
                </div>
            </div>
        )
    }
}

export default Necklaces