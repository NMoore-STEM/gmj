import React, {Component} from 'react';
import CollectionScrollItem from './CollectionScrollItem';

class CollectionScroll extends Component {
    render() {
        return (
            <div className="collection_frame">
                <div className="collection_container">
                    <h3>"COLLECTION_0" + [i + 1]</h3>
                    <div className="collection_deco"></div>
                </div>
                <div>
                    <CollectionScrollItem />
                    {/* <CollectionScrollItem />
                    <CollectionScrollItem />
                    <CollectionScrollItem /> */}
                </div>
            </div>
        );
    }
}

export default CollectionScroll;