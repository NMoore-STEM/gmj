import {Component} from 'react';
import FilterBase from './FilterBase';

class FilterDash extends Component{
    render(){
        return(
            <aside className="filter_container">
            <h6>filter</h6>
                <FilterBase />
                {/* insert logic to add component FilterSize for Sale and Necklace pages */}
            </aside>
        )
    }
}

export default FilterDash