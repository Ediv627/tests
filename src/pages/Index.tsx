import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CartSidebar from '@/components/CartSidebar';
import CheckoutDialog from '@/components/CheckoutDialog';
import Footer from '@/components/Footer';

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header onCartClick={() => setCartOpen(true)} />
      
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
      </main>

      <Footer />

      <CartSidebar 
        open={cartOpen} 
        onClose={() => setCartOpen(false)} 
        onCheckout={handleCheckout}
      />
      
      <CheckoutDialog 
        open={checkoutOpen} 
        onClose={() => setCheckoutOpen(false)} 
      />
    </div>
  );
};

export default Index;
