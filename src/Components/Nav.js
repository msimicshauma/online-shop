import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <section className="nav-bar">
      <ul>
        <li><NavLink to="/online-shop">Products</NavLink></li>
        <li><NavLink to="/shipping">Shipping</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
      <ul>
        <li>{'\u00A9'} React online shop 2018</li>
      </ul>
    </section>
  );
}

export default Nav;
