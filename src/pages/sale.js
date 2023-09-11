import CardsSale from '../components/CardsSale'

export default function Sale(){
    return (
        <>
            <div className="page_container">
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