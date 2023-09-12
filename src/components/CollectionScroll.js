import React, {Component} from 'react';
import CollectionScrollItem from './CollectionScrollItem';

class CollectionScroll extends Component {
    render() {
        return (
            <div className="collection_frame">
                <div className="collection_container">
                    <h3>COLLECTION</h3>
                    <div className="collection_scroll">
                        <CollectionScrollItem />
                    </div>
                    <div className="collection_deco"></div>
                </div>
            </div>
        );
    }
}

export default CollectionScroll;