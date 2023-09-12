import {Component} from 'react';
import stockData from '../data/archive/data (full original).json';

class CardsNeck extends Component{
    render(){
        const filtered = stockData.filter(
            (items) => items.type === "necklaces"
        )
        return(
            <div className="card_container">
                {filtered && filtered.map(item => {
                    return (
                        
                    <div className="item_card" key={ item.id }>
                        <div className="item_img_frame">
                            <img className="card_img" src={require("../images/" + item.type + "/" + item.id + ".png")} alt={""} />
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

export default CardsNeck