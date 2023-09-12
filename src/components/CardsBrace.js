import {Component} from 'react';
// import stockData from '../data/bracelets.json';
import stockData from '../data/archive/data (full original).json'

class CardsBrace extends Component{
    render(){
        const filterBrace = stockData.filter(
            (sale) => sale.type === "bracelets"
            );

        return(
            <div className="card_container">
                    {filterBrace && filterBrace.map(item => {
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

export default CardsBrace