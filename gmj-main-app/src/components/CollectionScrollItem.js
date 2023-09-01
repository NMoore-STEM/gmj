import React, {Component} from 'react';
import { stockData } from './../../public/data';

class CollectionScrollItem extends Component {
    render() {
        return (
            <div className="collection_card">
                <img src={require(stockData.img)} />
            </div>
        );
    }
}

export default CollectionScrollItem;