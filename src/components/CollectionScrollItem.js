import React, {Component} from 'react';
// import { stockData } from './/../data/data';
import neckData from '../data/necklaces.json';

class CollectionScrollItem extends Component {
    render() {
        const filterColl = neckData.filter(
            (coll) => coll.coll === "01"
            );
        return (
            <>
            <div className="collection_card">
            {filterColl.map(item => {
                return(
                    <>
                    <img 
                        key={ item.id }
                        className="coll_img"
                        src={require("../images/" + item.type + "/" + item.id + ".png")} 
                        alt={""} 
                    />
                    </>
                )}
            )}
            </div>
            </>
            );
    }
}

export default CollectionScrollItem;