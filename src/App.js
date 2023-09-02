import React from 'react';
import './index.scss';
import Header from './/components/Header';
import CollectionScroll from './/components/CollectionScroll';
import Footer from './/components/Footer';
import ValueStatement from './/components/ValueStatement';

export default function App() {
    return (
        <>
        <div id="main">
            <Header />
            <div className="home_splash">
                <img src={require("./images/home-splash.png")} alt={"Three models wearing jewelry"} />
            </div>
            <CollectionScroll />
            <div className="general_splash">
                <img src={require("./images/general_splash_01.png")} alt={"Formal couple seated at opera"} />
            </div>
            <CollectionScroll />
            <ValueStatement />
        </div>
        <Footer />
        </>
    )
}

