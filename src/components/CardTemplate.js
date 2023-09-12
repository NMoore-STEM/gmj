import {Component} from 'react';
// import stockData from '../data/necklaces.json';
// import { filtered } from {("../pages/" + useLocation())};
import { filtered } from '../pages/Necklaces';



class CardTemplate extends Component{
    render(){
        return(
            <div className="card_container">
                    {filtered && filtered.map(item => {
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
                        
                    )})}
            </div>
        )
    }
}

export default CardTemplate