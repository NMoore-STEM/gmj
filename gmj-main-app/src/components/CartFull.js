import React, {Component} from 'react';
//import { ReactComponent as CartSVG } from './/assets/cart-full.svg';

class CartFull extends Component {
    render() {
        return (
            <a href="cart.html" className="cart_full">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80">
                    <rect display="none" width="80" height="80"/>
                    <path fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" d="M31.775,34.04
	                C17.5-1.185,63.5-1.185,48.95,34.04"/>
                    <path fill="none" stroke="#FFFFFF" strokeWidth="6" d="M63,64c0,4.418-3.582,8-8,8H25c-4.418,0-8-3.582-8-8
	                V34c0-4.418,3.582-8,8-8h30c4.418,0,8,3.582,8,8V64z"/>
                </svg>
                <div className="cart_no_full">2</div>
            </a>
        );
    }
}


export default CartFull;