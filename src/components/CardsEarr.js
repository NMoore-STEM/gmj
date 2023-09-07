import {Component} from 'react';
import stockData from '../data/earrings.json';

class CardsEarr extends Component{
    render(){

        return(
            <div className="card_container">
                    {stockData && stockData.map(item => {
                        return (
                            
                        <div className="item_card" key={ item.id }>
                            <div className="item_img_frame">
                                <img className="card_img" src={require("../images/earrings/" + item.id + ".png")} alt={""} />
                            </div>
                            <div className="card_text_box">
                                <div className="card_text_left">
                                    <h5 className="card_title">{item.name}</h5>
                                    <p className="item_descr_short">{item.shortDescr}</p>
                                </div>
                                <p>{item.price}</p>
                            </div>
                        </div>
                        
                    )})}
            </div>
        )
    }
}

export default CardsEarr