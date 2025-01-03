import React from 'react';
import { Product } from '@/pages/types'; // Make sure Product type is imported correctly

// Define the type for the props expected by ProductCard
interface ProductCardProps {
  product: Product;  // product prop of type Product
  onAddToCart: () => void;  // Function to add to cart
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
      <button
        onClick={onAddToCart}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
