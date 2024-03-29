// import neckData from '../data/necklaces.json';
import {Component} from 'react';
import stockData from '../data/archive/data (full original).json';

class CardsSale extends Component{

    render(){
        const filtered = stockData.filter(
        (sale) => sale.onSale === true
        );

        return (
            <>
            {/* might need to move below further down below map as it needs a key? */}
            <div className="card_container">
            {filtered && filtered.map(item => {
                return(
                    <>

                    <div className="item_card" key={ item.id }>
                        <div className="item_img_frame">
                            <div className="sale_tag">30&#37; OFF</div>
                            <img className="card_img" src={require("../images/" + item.type + "/" + item.id + ".png")} alt={""} />
                        </div>
                        <div className="card_text_box">
                            {/* <div className="card_text_left"> */}
                                <h5 className="card_title">{item.name}</h5>
                                <p className="item_descr_short">{item.shortDescr}</p>
                            {/* </div> */}
                            <div className="price_container">
                                <p className={item.onSale ? "null_price" : "current_price"}>{item.price}</p>
                                <p className={item.onSale ? "current_price" : "no_sale_price"}>{item.salePrice}</p>
                            </div>
                        </div>
                    </div>
                    </>
                );
            })}
            </div>
            </>
        );
    }
}

export default CardsSale