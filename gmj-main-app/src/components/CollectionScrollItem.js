import React, {Component} from 'react';
import { stockData } from './/../data/data';

class CollectionScrollItem extends Component {
    render() {
        return (
            <div className="collection_card">
                <img src={stockData.img} alt={"Lapis pendant"} />
            </div>
        );
    }
}

export default CollectionScrollItem;