import {useParams} from "react-router-dom";
import stockData from '../data/archive/data (full original).json';
import AddCartButton from '../components/AddCartButton'


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
                    <div className='details_all_link'>Back to All Products</div>
                    <div className='details_home_link'>Return to Home</div>
                </div>
                <div className='product_type_bg'>
                    <div className='details_product_type page_title_frame'>{prodDetails.type}</div>
                </div>
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
                    <AddCartButton />
                </div>
            </div>
            <div className='item_materials'>
                <h4 className='details_mat_heading'>Materials</h4>
                <div>{prodDetails.materials}</div>
            </div>
            <div className='item_sizes'>
                <h4 className='details_size_heading'>Sizes Available</h4>
                <div className='item_sizes'>{prodDetails.sizes}</div>
            </div>
            {/* <ItemWrapping /> */}
        </div>
    );
}

export default ItemDetails