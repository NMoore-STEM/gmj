// import ItemCard from '../components/ItemCard';
import { useParams } from "react-router-dom";
// let { id } = useParams();

function ItemDetails() {
    const { id } = useParams();
    const item = 
    return(
        <div className="page_container">
            {/* <ItemCard /> */}
            <div className='item_card' key={item.id}>
        {/* <div className='item_card' key={item.id}> */}
            <div className='item_card_img'></div>
            <div className='item_text'>
                {/* <h3 className='item_title'>{item.name}</h3>
                <div className='item_descr_long'>{item.fullDescr}</div> */}
            </div>
            <div className='item_materials'>
                {/* <div>{item.materials}</div> */}
            </div>
            {/* <div className='item_sizes'>{item.sizes}</div> */}
            {/* <ItemWrapping /> */}
        </div>
        </div>
    );
}

export default ItemDetails