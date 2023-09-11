import neckData from '../data/necklaces.json';
import {Component} from 'react';

class CardsSale extends Component{

    render(){
        const filterSale = neckData.filter(
        (sale) => sale.onSale === "yes"
        );

        return (
            <>
            {/* might need to move below further down below map as it needs a key? */}
            <div className="card_container">
            {filterSale.map(item => {
                return(
                    <>

                    <div className="item_card" key={ item.id }>
                        <div className="item_img_frame">
                            <img className="card_img" src={require("../images/" + item.type + "/" + item.id + ".png")} alt={""} />
                        </div>
                        <div className="card_text_box">
                            <div className="card_text_left">
                                <h5 className="card_title">{item.name}</h5>
                                <p className="item_descr_short">{item.shortDescr}</p>
                            </div>
                            <p className="null_price">{item.price}</p>
                            <p>{item.salePrice}</p>
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