import {useParams} from "react-router-dom";
import stockData from '../data/archive/data (full original).json';


function ItemDetails() {
    const {id} = useParams();
    const prodDetails = stockData.find(
        items => items.id === id
    );
    // var prodImage = {
    //     backgroundImage: "url("")"
    // };
    console.log(useParams());
    console.log(id);
    return(
        <div className="details_page_container">
            <div className='item_details_card' key={prodDetails.id}>
                <div className='details_side_panel'>
                    <div>Back to All Products</div>
                    <div>Return to Home</div>
                </div>
                <div className='details_product_type'>{prodDetails.type}</div>
                {/* <div 
                    className='item_details_card_img'
                    // backgroundImage={require("../images/" + prodDetails.type + "/" + prodDetails.id + ".png")}
                    style={{
                        // backgroundImage: `url("../images/" + ${prodDetails.type} + "/" + ${prodDetails.id} + ".png")`,
                        backgroundImage: `url(${"../images/" + prodDetails.type + "/" + prodDetails.id + ".png"})`,
                        // C:\accumulation\code projects\git hub\gmj-main-app\src\images
                    }}
                ></div> */}
                <img className='item_details_card_img' src={require("../images/" + prodDetails.type + "/" + prodDetails.id + ".png")} alt={""} />
                <div className='item_details_text'>
                    <h3 className='item_details_title'>{prodDetails.name}</h3>
                    <div className='item_details_price'>{prodDetails.price}</div>
                    <div className='item_descr_long'>{prodDetails.fullDescr}</div>
                </div>
            </div>
            <div className='item_materials'>
                <div>{prodDetails.materials}</div>
            </div>
            <div className='item_sizes'>{prodDetails.sizes}</div>
            {/* <ItemWrapping /> */}
        </div>
    );
}

export default ItemDetails