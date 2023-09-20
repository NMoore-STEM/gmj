

function ItemWrapping() {
    const wrapOptions = ["Standard Packaging","Deluxe Wrapping","Elite Presentation"]
    return(
        <div className='item_sub'>
            <h4 className='details_sub_heading'>Luxury Giftwrapping Options</h4>
            <div className='item_sizes'>
            {wrapOptions.map((el,i) => (
                <div className='item_spec_frame item_spec_wrap' key={i}>
                    <span>{el}</span>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ItemWrapping