import {Component} from 'react';

class FilterBase extends Component{
    render(){
        return(
            <div className="filter_inputs">
                <p>cost</p>
                <input></input><p>-</p><input></input>
                <p>metal</p>
                {/* insert checkboxes for silver, silver & gold, gold */}
            </div>
        )
    }
}

export default FilterBase