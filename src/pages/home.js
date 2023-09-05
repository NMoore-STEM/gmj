import {Component} from 'react';
import CollectionScroll from '../components/CollectionScroll';

class Home extends Component{
    render() {
        return (
            <>
                <div className="home_splash">
                    <img src={require("../images/home-splash.png")} alt={"Three models wearing jewelry"} />
                </div>
                <CollectionScroll />
                <div className="general_splash">
                    <img src={require("../images/general_splash_01.png")} alt={"Formal couple seated at opera"} />
                </div>
                <CollectionScroll />
            </>
        )
    }
}

export default Home