// import {Component} from 'react';
// import TopTitle from '../components/TopTitle'
import FbIcon from '../assets/fb';
import IgIcon from '../assets/ig';
import TwIcon from '../assets/twitter';

export default function contact(){
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
    return(
        <>
        
        <div className='main_contact_container'>
        <h2>Contact</h2>
        <p>Reach out to us if you have a question about any of our products, process, or what we can do to better serve you.</p>
        <div className="contact_container">
            <form>
                <input></input><input></input>
                <input></input><input></input>
                <input></input>
                <button></button>
            </form>
        </div>
        <div className='social_container'>
            <h2>Socials</h2>
            <FbIcon />
            <TwIcon />
            <IgIcon />
        </div>
        </div></>
    )
}