import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Normativa from './components/Normativa';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import CookiePolicy from './components/CookiePolicy';
import { Product } from './components/ProductCard';

interface CartItem extends Product {
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'checkout' | 'confirmation' | 'privacy' | 'terms' | 'cookies'>('home');
  const [orderNumber, setOrderNumber] = useState('');

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Show cart briefly when item is added
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 1500);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  const handleOrderComplete = () => {
    const newOrderNumber = 'BV16-' + Date.now().toString().slice(-6);
    setOrderNumber(newOrderNumber);
    setCartItems([]);
    setCurrentView('confirmation');
  };

  const handleContinueShopping = () => {
    setCurrentView('home');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderContent = () => {
    switch (currentView) {
      case 'checkout':
        return (
          <Checkout
            items={cartItems}
            onBack={() => setIsCartOpen(true)}
            onOrderComplete={handleOrderComplete}
          />
        );
      case 'confirmation':
        return (
          <OrderConfirmation
            orderNumber={orderNumber}
            onContinueShopping={handleContinueShopping}
          />
        );
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsConditions />;
      case 'cookies':
        return <CookiePolicy />;
      default:
        return (
          <>
            <Hero />
            <Products onAddToCart={handleAddToCart} />
            <Normativa />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItems={totalItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      {renderContent()}
      
      <Footer onNavigate={setCurrentView} />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;