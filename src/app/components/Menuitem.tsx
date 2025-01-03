'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Product } from "@/pages/types";  
import Productcard from "./Productcard";

const Menuitem = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);         
  const [showCart, setShowCart] = useState(false);          
  const [isCheckout, setIsCheckout] = useState(false);      
  const router = useRouter();

  useEffect(() => {
    // Fetch product data from the API
    async function fetchProduct() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProduct();

    // Retrieve cart from localStorage if exists
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
    router.push("/checkout");  
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-backgrond"
        style={{
          backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUXFRUXFRUVGBUXFRUVFhYXFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGDAgIB8tLTcrKy0rLS0yLzctLS0rKy8tKystMistKy0tLS0tLSstLSsrKy8tLSsrLysrKy0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD0QAAICAQIEBAQDBgMIAwAAAAECABEDEiEEBTFBEyJRYQYycYGRocEjQmKx0fAUUuEHFRYkcoKi8TOSsv/EABoBAQACAwEAAAAAAAAAAAAAAAABAgMEBQb/xAAuEQACAQMEAQMBBwUAAAAAAAAAAQIDESEEEjFBIhNR8GEFMnG')", 
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Delicious Pizzas - Our Menu</h1>
          <p className="text-gray-300">
            Explore our selection of mouth-watering pizzas to order now!
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Productcard
              key={product.id}      
              product={product}        
              onAddToCart={() => addToCart(product)}  
            />
          ))}
        </div>

        {/* Cart Section */}
        {showCart && (
          <div className="cart-overlay">
            <h2 className="text-2xl font-bold text-white">Your Cart</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
            <button onClick={goToCheckout} className="btn-primary">
              Checkout
            </button>
            <button onClick={clearCart} className="btn-secondary">
              Clear Cart
            </button>
          </div>
        )}

        {/* Toggle Cart button */}
        <button
          onClick={toggleCart}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full"
        >
          {showCart ? "Close Cart" : "Open Cart"}
        </button>
      </div>
    </div>
  );
};

export default Menuitem;
