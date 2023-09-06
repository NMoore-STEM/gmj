import {Component} from 'react';
import expData from '../data/exp-data.json';

class Exp extends Component {
    render(){
        return(
            <div>
            { expData.map(item => {
                return(
                    <div className="item_card" key={ item.id }>
                        {item.necklace.map(neck => {
                            return(
                                <div className="card_text_box" key={ item.id }>
                                    <div className="card_text_left">
                                        <h5 className="card_title">{neck.name}</h5>
                                        <p className="item_descr_short">{neck.shortDescr}</p>
                                    </div>
                                    <p>{neck.price}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            </div>
            
        )
    }
}


export default Exp