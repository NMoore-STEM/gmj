import {Component} from 'react';
import {useParams} from "react-router-dom";
import stockData from '../data/archive/data (full original).json';
import FilterDash from '../components/FilterDash';
import CardTemplate from '../components/CardTemplate';
// import CardTemplate from '../components/CardTemplate'
// import stockData from '../data/archive/data (full original).json'

// const filtered = stockData.filter(
//     (items) => items.type === "necklaces"
// )
// return filtered; 

class ProductPage extends Component{
    
    render(){
        // const filtered = stockData.filter(
        //     (items) => {items.type === "necklaces"
        //     }
        // )
        // return filtered; 
        const {type} = useParams();
        const prodType = stockData.find(
            itemType => itemType.type === type
        );
        return(
            <div className="page_container">
                <div className="left_side_full">
                    <FilterDash />
                </div>
                <div className="store_main">
                    <div className="page_title_frame">
                        <h2 className="page_title">{prodType.type}</h2>
                    </div>
                    <CardTemplate />
                    <img src={require("../images/" + prodType.type +"/" + prodType.type + "-splash.png")} alt={"Two females sitting on a couch laughing together adorned with jewelry."}></img>
                </div>
            </div>
        )
    }
}

export default ProductPage