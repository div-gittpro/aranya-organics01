import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Bell, MessageSquare, ShoppingBag, X } from 'lucide-react';

import { Product, CartItem } from './types';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import AboutView from './components/AboutView';
import CartView from './components/CartView';
import Footer from './components/Footer';
import IntroStory from './components/IntroStory';
import ConsultationView from './components/ConsultationView';
import TermsView from './components/TermsView';
import ReturnsView from './components/ReturnsView';
import ShippingView from './components/ShippingView';
import ProductDetailView from './components/ProductDetailView';

export default function App() {
  // Global Navigation states
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Intro show/hide state (shown on every page reload)
  const [showIntro, setShowIntro] = useState<boolean>(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
    window.scrollTo({ top: 0 });
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0 });
  };

  // Cart, Favorites, and Detailed Modal states
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('aranya_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('aranya_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

  const openProductPage = (product: Product) => {
    setSelectedProductDetail(product);
    setCurrentTab('product-detail');
  };

  const closeProductPage = () => {
    setCurrentTab('products');
    setSelectedProductDetail(null);
  };

  // High fidelity toast notification system
  interface Toast {
    id: string;
    message: string;
    type: 'success' | 'info' | 'error';
  }
  const [toasts, setToasts] = useState<Toast[]>([]);

  const triggerToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('aranya_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aranya_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentTab]);

  // Global Actions
  const handleAddToCart = (product: Product, quantity?: number, selectedVariant?: string) => {
    const qtyToAdd = quantity || 1;
    
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedVariant === selectedVariant
      );

      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += qtyToAdd;
        return updated;
      } else {
        return [...prevCart, { product, quantity: qtyToAdd, selectedVariant }];
      }
    });

    const nameWithVariant = selectedVariant ? `${product.name} (${selectedVariant})` : product.name;
    triggerToast(`Added ${qtyToAdd} x ${nameWithVariant} to your botanical cart!`);
  };

  const handleUpdateCartQty = (productId: string, qty: number, selectedVariant?: string) => {
    if (qty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.selectedVariant === selectedVariant
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string, selectedVariant?: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedVariant === selectedVariant)
      )
    );
    triggerToast("Item removed from cart.", "info");
  };

  const handleToggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const isFav = prev.includes(productId);
      if (isFav) {
        triggerToast("Removed from wishlist.", "info");
        return prev.filter((id) => id !== productId);
      } else {
        triggerToast("Added to wishlist ❤️", "success");
        return [...prev, productId];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full z-[100]"
        >
          <IntroStory onComplete={handleIntroComplete} />
        </motion.div>
      ) : (
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="bg-background min-h-screen text-on-background flex flex-col font-sans selection:bg-secondary/20 selection:text-primary"
        >
          {/* 1. Sticky boutique Header */}
          <Navbar 
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            cart={cart}
            setIsCartOpen={() => setIsCartOpen(true)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* 2. Main content pages */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              {currentTab === 'home' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <HomeView 
                    setCurrentTab={setCurrentTab}
                    onAddToCart={handleAddToCart}
                    onOpenProductDetail={openProductPage}
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </motion.div>
              )}

              {currentTab === 'products' && (
                <motion.div
                  key="products"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductsView 
                    onAddToCart={handleAddToCart}
                    onOpenProductDetail={openProductPage}
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setIsCartOpen={() => setIsCartOpen(true)}
                  />
                </motion.div>
              )}

              {currentTab === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <AboutView />
                </motion.div>
              )}

              {currentTab === 'consultation' && (
                <motion.div
                  key="consultation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ConsultationView
                    onAddToCart={handleAddToCart}
                    onOpenProductDetail={openProductPage}
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </motion.div>
              )}

              {currentTab === 'product-detail' && selectedProductDetail && (
                <motion.div
                  key={`product-detail-${selectedProductDetail.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductDetailView
                    product={selectedProductDetail}
                    onBack={closeProductPage}
                    onAddToCart={handleAddToCart}
                    favorites={favorites}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </motion.div>
              )}

              {currentTab === 'terms' && (
                <motion.div
                  key="terms"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <TermsView />
                </motion.div>
              )}

              {currentTab === 'returns' && (
                <motion.div
                  key="returns"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ReturnsView />
                </motion.div>
              )}

              {currentTab === 'shipping' && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ShippingView />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* 3. Aesthetic Botanical Footer */}
          <Footer setCurrentTab={setCurrentTab} onReplayIntro={handleReplayIntro} />

          {/* 4. Global Floating Cart Panel (Drawer Overlay) */}
          <AnimatePresence>
            {isCartOpen && (
              <CartView 
                cart={cart}
                onUpdateQty={handleUpdateCartQty}
                onRemoveItem={handleRemoveCartItem}
                onClose={() => setIsCartOpen(false)}
                clearCart={clearCart}
              />
            )}
          </AnimatePresence>

          {/* 5. Dynamic Floating Toast Notification Engine */}
          <div className="fixed bottom-6 left-6 z-[120] space-y-2 pointer-events-none max-w-sm">
            <AnimatePresence>
              {toasts.map((toast) => (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.9 }}
                  className={`p-4 rounded-xl shadow-lg border text-xs font-bold flex items-center gap-3 backdrop-blur pointer-events-auto ${
                    toast.type === 'success'
                      ? 'bg-primary/95 text-white border-secondary/30'
                      : 'bg-white/95 text-primary border-outline-variant/30'
                  }`}
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-secondary-fixed" />
                  <span>{toast.message}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
