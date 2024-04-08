import React from 'react';
import ProductCard from './components/ProductCard';

const ProductList = () => {
  const products = [
    {
      image: 'https://example.com/product1.jpg',
      name: 'Product 1',
      description: 'This is product 1.',
      price: 10,
    },
    {
      image: 'https://example.com/product2.jpg',
      name: 'Product 2',
      description: 'This is product 2.',
      price: 20,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductList;