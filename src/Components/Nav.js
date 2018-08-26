import React from 'react';

const Nav = () => {
  return (
    <section className="nav-bar">
      <ul>
        <li>Products</li>
        <li>Shipping</li>
        <li>About</li>
      </ul>
      <ul>
        <li>{'\u00A9'} React online shop 2018</li>
      </ul>
    </section>
  );
}

export default Nav;
