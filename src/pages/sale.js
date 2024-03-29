import CardsSale from '../components/CardsSale';
import FilterDash from '../components/FilterDash'

export default function Sale(){
    return (
        <>
            <div className="page_container">
            <div className="left_side_full">
                <FilterDash />
            </div>
            <div className="store_main">
                <div className="page_title_frame">
                    <h2 className="page_title">SALE ITEMS</h2>
                </div>
                <CardsSale />
                {/* <img src={require("../images/earrings/earrings-splash.png")} alt={"Woman standing facing Roman ruins wearing jewelry."} /> */}
                </div>
            </div>
        </>
    )
}