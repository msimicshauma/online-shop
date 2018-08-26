import React from 'react';

const Product = ({products, addItem}) => {

  const productList = products.map(product => {
    return (
      <div className="product" key={product.id}>
        <img src={product.img} alt={product.alt}/>
        <div className="product-name">{product.name}</div>
        <div className="product-price">Price: {product.price + product.currency}</div>
        <i className="fa fa-plus add-to-card" onClick={() => addItem(product)}></i>
      </div>
    );
  });

  return (
    <div className="products-grid">
      {productList}
    </div>
  );
}

export default Product;
