import React from 'react';

const productMapping = {
  1: {
    id: '1',
    title: 'Calculator',
    description: 'Awesome calculator',
    price: 2000,
    currency: 'THB',
    imageLink: '/images/calculator.jpeg',
    group: 1,
  },
  2: {
    id: '2',
    title: 'Camera',
    description: 'Black Camera',
    price: 35000,
    currency: 'THB',
    imageLink: '/images/camera.jpeg',
    group: 2,
  },
  3: {
    id: '3',
    title: 'Len',
    description: 'Len for Camera',
    price: 8000,
    currency: 'THB',
    imageLink: '/images/len.jpeg',
    group: 2,
  },
  4: {
    id: '4',
    title: 'Watch',
    description: 'Great Watch',
    price: 2000,
    currency: 'THB',
    imageLink: '/images/watch.jpeg',
    group: 3,
  },
};

const Product = ({match}) => {
  const {params: {productId}} = match;
  const product = productMapping[productId];

  window.fbq('track', 'ViewContent', {
    value: product.price,
    currency: product.currency,
    content_name: product.title,
    content_type: 'product',
    content_ids: [product.id],
  });

  const addToCartHandler = () => {
    window.fbq('track', 'AddToCart', {
      value: product.price,
      currency: product.currency,
      content_name: product.title,
      content_type: 'product',
      content_ids: product.id,
      item_group_id: product.group,
    });
    alert(`You have added ${product.title} to card`);
  }

  const buyHandler = () => {
    window.fbq('track', 'Purchase', {
      value: product.price,
      currency: product.currency,
      num_items: 1,
      content_name: product.title,
      content_type: 'product',
      content_ids: product.id,
      item_group_id: product.group,
    });
    alert(`You have purchased ${product.title} at price ${product.price}!`);
  };

  const loveHandler = () => {
    window.fbq('track', 'Love', {
      content_name: product.title,
      value: 'Love',
    });
  };

  return (
    <div>
      <div>Product ID: {product.id}</div>
      <img src={product.imageLink} alt={product.description} width="200px"/>
      <div>Title: {product.title}</div>
      <div>Description: {product.description}</div>
      <div>Price: {product.price}</div>
      <button onClick={addToCartHandler}>Add to Cart</button>
      <button onClick={buyHandler}>Buy Now!</button>
      <button onClick={loveHandler}>Love ❤</button>
    </div>
  )
};

export default Product;
