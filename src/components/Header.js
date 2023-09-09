// import React, {Component} from 'react';
import LogoHeader from './LogoHeader';
import NavBar from './NavBar';
import CartFull from './CartFull';

function Header() {
  return (
    <header>
      <LogoHeader />
      <h1>fine art jewelry</h1>
      <NavBar />
      <CartFull />
    </header>
  );
}

export default Header;