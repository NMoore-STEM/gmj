import { ItemWrapping } from './ItemWrapping';

function ItemCard() {
    return(
        <div className='item_card'>
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
            <ItemWrapping />
        </div>
    );
}

export default ItemCard