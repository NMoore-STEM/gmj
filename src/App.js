import { Routes, Route } from 'react-router-dom';
import './index.scss';
import Header from './/components/Header';
import Footer from './/components/Footer';
import ValueStatement from './/components/ValueStatement';
import Home from './pages/home';
// import About from './pages/about';
import Contact from './pages/contact';
import StoreFrame from './pages/StoreFrame';
import Store from './pages/Store';
import Necklaces from './pages/Necklaces';
import Bracelets from './pages/Bracelets';
import Earrings from './pages/Earrings';
import Charms from './pages/Charms';
import Sale from './pages/Sale';
import ItemDetails from './pages/ItemDetails';
import ScrollToTop from './components/ScrollToTop'

export default function App() {
    return (
        <>
        <div id="main">
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={ <Home/> } />
                {/* <Route path="about" element={ <About/> } /> */}
                <Route path="contact" element={ <Contact/> } />
                <Route path="store" element={ <StoreFrame/> }>
                    <Route path="/store" element={ <Store/>} />
                    <Route path="sale" element={ <Sale/> } />
                    <Route path="necklaces" element={ <Necklaces/> } />
                    <Route path="bracelets" element={ <Bracelets/> } />
                    <Route path="earrings" element={ <Earrings/> } />
                    <Route path="charms" element={ <Charms/> } />
                    <Route path="/store/:id" element={ <ItemDetails/> } />
                </Route>
                <Route path="necklaces" element={ <Necklaces/> } />
                <Route path="bracelets" element={ <Bracelets/> } />
                <Route path="earrings" element={ <Earrings/> } />
                <Route path="charms" element={ <Charms/> } />
                <Route path="sale" element={ <Sale/> } />
                {/* <Route path="itempage" element={ <ItemPage/> } /> */}
            </Routes>
            <ValueStatement />
            <Footer />
        </div>
        </>
    )
}