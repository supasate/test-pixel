import React from 'react';

const productMapping = {
  1: {
    id: 1,
    title: 'Calculator',
    description: 'Awesome calculator',
    price: '2000 THB',
    imageLink: '/images/calculator.jpeg',
  },
  2: {
    id: 2,
    title: 'Camera',
    description: 'Black Camera',
    price: '35000 THB',
    imageLink: '/images/camera.jpeg',
  },
  3: {
    id: 3,
    title: 'Len',
    description: 'Len for Camera',
    price: '8000 THB',
    imageLink: '/images/len.jpeg',
  },
  4: {
    id: 4,
    title: 'Watch',
    description: 'Great Watch',
    price: '2000 THB',
    imageLink: '/images/watch.jpeg',
  },
};

const Product = ({match}) => {
  const {params: {productId}} = match;
  const product = productMapping[productId];

  const clickHandler = () => {
    window.fbq('track', 'Purchase', {
      value: product.id,
      currency: 'THB',
      num_items: 1,
      content_name: product.title,
    });
    alert(`You have purchased ${product.title} at price ${product.price}!`);
  }

  return (
    <div>
      <div>Product ID: {product.id}</div>
      <img src={product.imageLink} alt={product.description} width="200px"/>
      <div>Title: {product.title}</div>
      <div>Description: {product.description}</div>
      <div>Price: {product.price}</div>
      <button onClick={clickHandler}>Buy Now!</button>
    </div>
  )
};

export default Product;
