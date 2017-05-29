import React from 'react';

const Products = () => {
  const clickHandler = (productId, productName, price) => {
    window.fbq('track', 'Purchase', {
      value: productId,
      currency: 'USD',
      num_items: 1,
      content_name: productName,
    });
    alert(`You have purchased ${productName} at USD${price}!!!`);
  }

  return (
    <ul>
      <li>
        <div>Awesome Shoes</div>
        <div>$20</div>
        <button onClick={() => clickHandler(1, 'Awesome Shoes', 20)}>Buy Now!</button>
      </li>
      <li>
        <div>Wow Gloves</div>
        <div>$30</div>
        <button onClick={() => clickHandler(2, 'Wow Gloves', 30)}>Buy Now!</button>
      </li>
      <li>
        <div>Superb T-Shirt</div>
        <div>$10</div>
        <button onClick={() => clickHandler(3, 'Superb T-Shirt', 10)}>Buy Now!</button>
      </li>
    </ul>
  );
};

export default Products;
