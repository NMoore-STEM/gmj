// import {useState} from "react";
import {useParams} from "react-router-dom";
import stockData from '../data/archive/data (full original).json';
import AddCartButton from '../components/AddCartButton';
import ItemWrapping from '../components/ItemWrapping'


function ItemDetails() {
    const {id} = useParams();
    const prodDetails = stockData.find(
        items => items.id === id
    );
    const prodSizes = Array.from(prodDetails.sizes);
    // const [selectedSize, setSelectedSize] = useState(false);
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
                <img className='item_details_card_img' src={require("../images/" + prodDetails.type + "/" + prodDetails.id + ".png")} alt={""} />
                <div className='item_details_text'>
                    <h3 className='item_details_title'>{prodDetails.name}</h3>
                    <div className='item_details_price'>{prodDetails.price}</div>
                    <div className='item_descr_long'>{prodDetails.fullDescr}</div>
                    <AddCartButton />
                </div>
            </div>
            <div className='item_sub'>
                <h4 className='details_sub_heading'>Materials</h4>
                <div>{prodDetails.materials}</div>
            </div>
            <div className='item_sub'>
                <h4 className='details_sub_heading'>Sizes Available</h4>
                <div className='item_sizes'>
                    {prodSizes.map((el,i) => (
                        <div className='item_spec_frame item_spec_size' key={i}>
                            <span>{el}</span>
                        </div>
                    ))}
                </div>
            </div>
            <ItemWrapping />
        </div>
    );
}

export default ItemDetails